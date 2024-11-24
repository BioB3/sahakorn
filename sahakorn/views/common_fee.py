from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer
from sahakorn.models import CommonFee


class CommonFeeSerializer(ModelSerializer):
    class Meta:
        model = CommonFee
        fields = "__all__"


class CommonFeeViewSet(ModelViewSet):
    """A viewset for common fee model."""

    queryset = CommonFee.objects.all()
    serializer_class = CommonFeeSerializer
