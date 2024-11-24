from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer
from sahakorn.models import Loans


class LoansSerializer(ModelSerializer):
    class Meta:
        model = Loans
        fields = "__all__"


class LoansViewSet(ModelViewSet):
    """A viewset for Loans model."""

    queryset = Loans.objects.all()
    serializer_class = LoansSerializer
