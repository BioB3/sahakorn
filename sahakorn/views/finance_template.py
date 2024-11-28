from django.views import generic


class FinanceView(generic.TemplateView):
    template_name = "sahakorn/finance.html"
