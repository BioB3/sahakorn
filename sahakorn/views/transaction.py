from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from rest_framework.serializers import ModelSerializer
from django.views import generic
from sahakorn.models import Transaction, MarketItem


class TransactionSerializer(ModelSerializer):
    class Meta:
        model = Transaction
        fields = "__all__"

    def create(self, validated_data):
        transaction = Transaction()
        transaction.quantity = validated_data["quantity"]
        transaction.date = validated_data["date"]
        transaction.market_item = validated_data["market_item"]
        transaction.member = validated_data["member"]
        transaction.total_paid = transaction.market_item.price * transaction.quantity
        transaction.save()
        return transaction


class TransactionViewSet(ModelViewSet):
    """A viewset for Transaction model."""

    serializer_class = TransactionSerializer

    def get_queryset(self):
        item_type = self.request.query_params.get("item_type")
        order = self.request.query_params.get("order")
        if item_type and order:
            return Transaction.objects.filter(
                market_item__stock__item_type__name=item_type, member__user=self.request.user
            ).order_by("-date", order)
        elif order:
            return Transaction.objects.filter(member__user=self.request.user).order_by("-date", order)
        elif item_type:
            return Transaction.objects.filter(
                market_item__stock__item_type__name=item_type, member__user=self.request.user
            )
        return Transaction.objects.filter(member__user=self.request.user).order_by("-date")

    def create(self, request):
        data = request.data
        serializer = TransactionSerializer(data=data)
        try:
            market_item = MarketItem.objects.get(id=data["market_item"])
        except MarketItem.DoesNotExist:
            return Response({"error": "MarketItem does not exist"}, status=status.HTTP_400_BAD_REQUEST)
        if serializer.is_valid():
            market_item.quantity -= int(data["quantity"])
            market_item.save()
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TransactionView(generic.TemplateView):
    """Transaction view"""

    template_name = 'sahakorn/transaction.html'
