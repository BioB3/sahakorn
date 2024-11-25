from rest_framework import status
from rest_framework.response import Response
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

    def list(self, request, *args, **kwargs):
        member = request.query_params("member")
        if member is not None:
            queryset = Borrowing.objects.filter(user=member)
            serializer = BorrowingSerializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return super().list(request, *args, **kwargs)
