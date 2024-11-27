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

    def create(self, request, *args, **kwargs):
        serializer = CommonFeeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        obj, created = CommonFee.objects.get_or_create(
            month=data["month"], year=data["year"], member=data["member"],
            defaults={
                "month": data["month"],
                "year": data["year"],
                "total_paid": data["total_paid"],
                "member": data["member"]}
        )
        if not created:
            obj = CommonFee.objects.get(
                month=data["month"], year=data["year"], member=data["member"])
            obj.total_paid += data["total_paid"]
            obj.save()
        response_serializer = CommonFeeSerializer(obj)
        return Response(response_serializer.data, status=201)

    def retrieve(self, request, *args, **kwargs):
        user = request.user
        today = datetime.now()
        try:
            query = CommonFee.objects.get(
                member__id=user.id, month=today.month, year=today.year)
        except CommonFee.DoesNotExist:
            return Response(
                {"error": "no Common Fee this month", "total_paid": 0, "total_due": 100.0},
                status=status.HTTP_404_NOT_FOUND)
        serializer = CommonFeeSerializer(query)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(detail=False, methods=["get"])
    def payment_status(self, request):
        queryset = CommonFee.objects.filter(member__user=request.user)
        if not queryset:
            return Response({"payment_status": "Late"}, status=status.HTTP_200_OK)
        q = queryset.last()

        if (
            datetime.now() >= datetime(q.year, q.month, 1)
            and q.total_due - q.total_paid > 0
        ):
            return Response({"payment_status": "Late"}, status=status.HTTP_200_OK)
        return Response({"payment_status": "Up to Date"}, status=status.HTTP_200_OK)
