from rest_framework.views import APIView
from rest_framework import permissions
from django.contrib.auth.models import User
from django.http import HttpResponse

class SignupView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        
        username = data["username"]
        password = data["password"]
        re_password = data["re_password"]

        if password != re_password:
            return HttpResponse({"error": "Passwords do not match"})
        if User.objects.filter(username=username).exists():
            return HttpResponse({"error": "Username already exists"})
        if len(password) < 6:
            return HttpResponse({"error": "Password must be at least 6 characters"})
        user = User.objects.create_user(username=username, password=password)
        user.save()
    