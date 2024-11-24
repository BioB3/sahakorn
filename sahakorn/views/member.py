from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer
from sahakorn.models import Member


class MemberSerializer(ModelSerializer):
    class Meta:
        model = Member
        fields = "__all__"


class MemberViewSet(ModelViewSet):
    """A viewset for Member model."""

    queryset = Member.objects.all()
    serializer_class = MemberSerializer
