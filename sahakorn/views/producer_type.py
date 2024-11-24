from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer
from sahakorn.models import ProducerType


class ProducerTypeSerializer(ModelSerializer):
    class Meta:
        model = ProducerType
        fields = "__all__"


class ProducerTypeViewSet(ModelViewSet):
    """A viewset for ProducerType model."""

    queryset = ProducerType.objects.all()
    serializer_class = ProducerTypeSerializer
