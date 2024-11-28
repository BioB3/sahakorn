from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer
from rest_framework.response import Response
from sahakorn.models import Loans


class LoansSerializer(ModelSerializer):
    class Meta:
        model = Loans
        fields = "__all__"


class LoansViewSet(ModelViewSet):
    """A viewset for Loans model."""

    serializer_class = LoansSerializer

    def get_queryset(self):
        member = self.request.query_params.get("member")
        if member is not None:
            return Loans.objects.filter(member__user=self.request.user).order_by("-loan_date")
        return Loans.objects.all().order_by("-loan_date")

    def update(self, request, *args, **kwargs):
        loan = self.get_object()
        serializer = LoansSerializer(data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        loan.paid += serializer.validated_data["paid"]
        loan.save()
        response_serializer = LoansSerializer(loan)
        return Response(response_serializer.data, status=200)
