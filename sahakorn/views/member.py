from typing import Any
from django.db.models import QuerySet
from django.views.generic import ListView
from rest_framework.viewsets import ModelViewSet
from rest_framework.serializers import ModelSerializer
from rest_framework.response import Response
from sahakorn.models import Member


class MemberListView(ListView):
    template_name = "sahakorn/member.html"
    context_object_name = "members"

    def get_queryset(self) -> QuerySet[Any]:
        return Member.objects.all()


class MemberSerializer(ModelSerializer):
    class Meta:
        model = Member
        fields = "__all__"


class MemberViewSet(ModelViewSet):
    """A viewset for Member model."""

    queryset = Member.objects.all()
    serializer_class = MemberSerializer

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
