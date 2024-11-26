from typing import Any
from django.views.generic import TemplateView
from sahakorn.models import Member

class ProfileView(TemplateView):
    template_name = "sahakorn/profile.html"

    def get_context_data(self, **kwargs: Any) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)
        profile = Member.objects.get(user=self.request.user)
        context["profile"] = profile
        return context