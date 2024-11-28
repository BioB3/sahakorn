from rest_framework.viewsets import ModelViewSet
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from sahakorn.models import Equipment

from django.views import generic


class EquipmentView(generic.TemplateView):
    template_name = "sahakorn/equipment.html"

class EquipmentSerializer(ModelSerializer):
    owner_name = serializers.SerializerMethodField()

    class Meta:
        model = Equipment
        fields = "__all__"

    def get_owner_name(self, obj):
        return obj.owner_name


class EquipmentViewSet(ModelViewSet):
    """A viewset for equipment model."""

    serializer_class = EquipmentSerializer

    def get_queryset(self):
        owner = self.request.query_params.get("owner")
        if owner is not None:
            print(self.request.user)
            queryset = Equipment.objects.filter(owner__user=self.request.user)
        else:
            queryset = Equipment.objects.all()
        return queryset
