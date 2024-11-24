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
