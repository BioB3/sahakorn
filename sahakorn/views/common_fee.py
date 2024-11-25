from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response
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

    @action(detail=False, methods=["post"])
    def not_paid(self, request):
        queryset = CommonFee.objects.filter(total_paid=0)
        serializer = CommonFeeSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
