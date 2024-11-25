from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer
from rest_framework.response import Response
from django.contrib.auth.models import User
from sahakorn.models import Member


class MemberSerializer(ModelSerializer):
    class Meta:
        model = Member
        fields = "__all__"


class MemberViewSet(ModelViewSet):
    """A viewset for Member model."""

    queryset = Member.objects.all()
    serializer_class = MemberSerializer

    def retrieve(self, request, *args, **kwargs):
        user = self.request.user
        username = user.username
        user = User.objects.get(id=user.id)
        member = Member.objects.get(user=user)
        member = MemberSerializer(member)
        return Response({"profile": member.data, "username": str(username)})

    def create(self, request, *args, **kwargs):
        user = self.request.user
        username = user.username
        data = self.request.data
        name = data["name"]
        tags = data["produce_type"]
        user = User.objects.get(id=user.id)
        Member.objects.filter(user=user).update(name=name)
        member = Member.objects.get(user=user)
        member = MemberSerializer(member)
        return Response({"profile": member.data, "username": str(username)})