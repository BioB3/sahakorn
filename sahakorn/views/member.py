from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from sahakorn.models import Member


class MemberSerializer(ModelSerializer):
    class Meta:
        model = Member
        fields = "__all__"


class MemberViewSet(ModelViewSet):
    """A viewset for Member model."""

    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def retrieve(self, request, *args, **kwargs):
        user = self.request.user
        username = user.username
        member = Member.objects.get(user=user)
        member = MemberSerializer(member)
        return Response({"profile": member.data, "username": str(username)})

    def create(self, request, *args, **kwargs):
        user = self.request.user
        username = user.username
        data = self.request.data
        name = data["name"]
        tags = data["produce_type"]
        Member.objects.filter(user=user).update(name=name)
        member = Member.objects.get(user=user)
        member = MemberSerializer(member)
        return Response({"profile": member.data, "username": str(username)})

    def update(self, request, *args, **kwargs):
        user = self.request.user
        username = user.username
        member = Member.objects.get(user=user)
        serializer = MemberSerializer(member, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"profile": serializer.data, "username": str(username)})
        return Response({"error": serializer.errors})