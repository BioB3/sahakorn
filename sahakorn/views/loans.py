from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer
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
            return Loans.objects.filter(member__user=self.request.user)
        return Loans.objects.all()
