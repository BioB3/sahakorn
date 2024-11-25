from rest_framework import status
from rest_framework.response import Response
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

    def list(self, request, *args, **kwargs):
        item_type = request.query_params.get("item_type")
        if request.query_params.get("item_type"):
            queryset = MarketItem.objects.filter(item_type=item_type)
            serializer = MarketItemSerializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return super().list(request, *args, **kwargs)
