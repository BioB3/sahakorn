from datetime import datetime
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

    @action(detail=False, methods=["get"])
    def payment_status(self, request):
        queryset = CommonFee.objects.filter(member__user=self.request.user)
        if not queryset:
            return Response({"payment_status": "Up to Date"}, status=status.HTTP_200_OK)
        q = queryset.last()

        if (
            datetime.now() >= datetime(q.year, q.month, 1)
            and q.total_due - q.total_paid > 0
        ):
            return Response({"payment_status": "Late"}, status=status.HTTP_200_OK)
        return Response({"payment_status": "Up to Date"}, status=status.HTTP_200_OK)
