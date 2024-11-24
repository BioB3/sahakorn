from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer
from sahakorn.models import Stock


class StockSerializer(ModelSerializer):
    class Meta:
        model = Stock
        fields = "__all__"


class StockViewSet(ModelViewSet):
    """A viewset for Stock model."""

    queryset = Stock.objects.all()
    serializer_class = StockSerializer
