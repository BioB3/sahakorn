from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from sahakorn.models import Borrowing

class BorrowingSerializer(ModelSerializer):
    borrower_name = serializers.SerializerMethodField()

    class Meta:
        model = Borrowing
        fields = "__all__"

    def get_borrower_name(self, obj):
        return obj.borrower_name


class BorrowingViewSet(ModelViewSet):
    """A viewset for Borrowing model."""

    serializer_class = BorrowingSerializer
    
    def get_queryset(self):
        member = self.request.query_params.get("member")
        owner = self.request.query_params.get("owner")
        equipment_id = self.request.query_params.get("equipment")
        if member is not None:
            queryset = Borrowing.objects.filter(user=member)
        elif owner is not None:
            queryset = Borrowing.objects.filter(equipment__owner__user=self.request.user)
        elif equipment_id is not None:
            queryset = Borrowing.objects.filter(equipment__id = equipment_id)
        else:
            queryset = Borrowing.objects.all()
        return queryset
