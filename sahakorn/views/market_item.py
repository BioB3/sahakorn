from rest_framework.viewsets import ModelViewSet
from rest_framework import serializers, status
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer
from sahakorn.models import MarketItem, Stock
from django.views import generic


class MarketView(generic.TemplateView):
    template_name = "sahakorn/market.html"

class MarketItemSerializer(ModelSerializer):
    producer = serializers.SerializerMethodField()
    
    class Meta:
        model = MarketItem
        fields = "__all__"

    def get_producer(self, obj):
        return obj.member.name


class MarketItemViewSet(ModelViewSet):
    """A viewset for MarketItem model."""

    serializer_class = MarketItemSerializer
    
    def get_queryset(self):
        item_type = self.request.query_params.get("item_type")
        order = self.request.query_params.get("order")
        if item_type and order:
            return MarketItem.objects.filter(stock__item_type__name=item_type).order_by(order)
        if item_type is not None:
            return MarketItem.objects.filter(stock__item_type__name=item_type)
        if order is not None:
            return MarketItem.objects.order_by(order)
        return MarketItem.objects.all()

    def create(self, request):
        data = request.data
        serializer = MarketItemSerializer(data=data)
        try:
            stock = Stock.objects.get(id=data["stock"])
        except Stock.DoesNotExist:
            return Response({"error": "Stock does not exist"}, status=status.HTTP_400_BAD_REQUEST)
        if serializer.is_valid():
            stock.quantity -= int(data["quantity"])
            stock.save()
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
