from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer
from sahakorn.models import Transaction


class TransactionSerializer(ModelSerializer):
    class Meta:
        model = Transaction
        fields = "__all__"


class TransactionViewSet(ModelViewSet):
    """A viewset for Transaction model."""

    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def list(self, request, *args, **kwargs):
        item_type = request.query_params.get("item_type")
        member = request.query_params.get("member")
        if item_type or member:
            if item_type is not None and member is not None:
                queryset = Transaction.objects.filter(
                    market_item__stock__item_type=item_type,
                    member=member,
                )

            elif item_type is not None:
                queryset = Transaction.objects.filter(
                    market_item__stock__item_type=item_type
                )

            elif member is not None:
                queryset = Transaction.objects.filter(member=member)

            return Response(
                TransactionSerializer(queryset, many=True).data,
                status=status.HTTP_200_OK,
            )

        return super().list(request, *args, **kwargs)
