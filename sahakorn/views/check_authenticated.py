from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions


class CheckAuthenticatedView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=True):
        user = self.request.user
        if user.is_authenticated:
            return Response({"isAuthenticated": "success"})
        else:
            return Response({"isAuthenticated": "error"})