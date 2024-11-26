from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User


class DeleteAccountView(APIView):
    def delete(self, request, format=None):
        user = self.request.user
        User.objects.filter(id=user.id).delete()
        return Response({"success": "User deleted successfully"})