from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer
from sahakorn.models import Equipment

from django.views import generic


class EquipmentView(generic.TemplateView):
    template_name = "sahakorn/equipment.html"

class EquipmentSerializer(ModelSerializer):
    class Meta:
        model = Equipment
        fields = "__all__"


class EquipmentViewSet(ModelViewSet):
    """A viewset for equipment model."""

    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer
