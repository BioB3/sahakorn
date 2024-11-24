from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer
from sahakorn.models import ItemType


class ItemTypeSerializer(ModelSerializer):
    class Meta:
        model = ItemType
        fields = "__all__"


class ItemTypeViewSet(ModelViewSet):
    """A viewset for ItemType model."""

    queryset = ItemType.objects.all()
    serializer_class = ItemTypeSerializer
