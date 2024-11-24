from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer
from sahakorn.models import MarketItem


class MarketItemSerializer(ModelSerializer):
    class Meta:
        model = MarketItem
        fields = "__all__"


class MarketItemViewSet(ModelViewSet):
    """A viewset for MarketItem model."""

    queryset = MarketItem.objects.all()
    serializer_class = MarketItemSerializer
