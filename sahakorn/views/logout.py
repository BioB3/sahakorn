from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib import auth


class LogoutView(APIView):
    def post(self, request, format=None):
        try:
            auth.logout(request)
            return Response({"success": "Logout"})
        except:
            return Response({"error": "Something went wrong"})