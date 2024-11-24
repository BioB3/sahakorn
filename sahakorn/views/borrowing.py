from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer
from sahakorn.models import Borrowing


class BorrowingSerializer(ModelSerializer):
    class Meta:
        model = Borrowing
        fields = "__all__"


class BorrowingViewSet(ModelViewSet):
    """A viewset for Borrowing model."""

    queryset = Borrowing.objects.all()
    serializer_class = BorrowingSerializer
