from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect
from sahakorn.models import Member


@method_decorator(csrf_protect, name="dispatch")
class SignupView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        
        username = data["username"]
        password = data["password"]
        re_password = data["re_password"]

        if password != re_password:
            return Response({"error": "Passwords do not match"})
        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already exists"})
        if len(password) < 6:
            return Response({"error": "Password must be at least 6 characters"})
        user = User.objects.create_user(username=username, password=password)
        user.save()
        user = User.objects.get(id=user.id)
        member = Member.objects.create(user=user, name=username)
        member.save()
        return Response({"success": "User created successfully"})
