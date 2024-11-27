from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer
from rest_framework.response import Response
from rest_framework import status
from django.views import generic
from sahakorn.models import Stock, ItemType
from .item_type import ItemTypeSerializer

class StockSerializer(ModelSerializer):
    item_type = ItemTypeSerializer(many=True, read_only=True)
    class Meta:
        model = Stock
        fields = "__all__"


class StockViewSet(ModelViewSet):
    """A viewset for Stock model."""

    serializer_class = StockSerializer

    def get_queryset(self):
        user = self.request.query_params.get("user")
        item_type = self.request.query_params.get("item_type")
        if user and item_type:
            return Stock.objects.filter(item_type__name=item_type, member__user__id=user)
        elif user:
            return Stock.objects.filter(member__user__id=user)
        return Stock.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = StockSerializer(data=request.data)
        if serializer.is_valid():
            updated = serializer.save()
            for tag_id in request.data.get("item_type"):
                tag = ItemType.objects.get(id=tag_id)
                updated.item_type.add(tag)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class InventoryView(generic.ListView):
    """inventory view"""

    template_name = 'sahakorn/inventory.html'
    context_object_name = 'stock_items'

    def get_queryset(self):
        """Get all StockItems belonging to the user"""
        return Stock.objects.filter(member__user=self.request.user)

