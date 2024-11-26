from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib import auth
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect


@method_decorator(csrf_protect, name="dispatch")
class LoginView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        username = data["username"]
        password = data["password"]
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return Response({"success": "User authenticated", "username": username})
        else:
            return Response({"error": "Error Authenticating"})