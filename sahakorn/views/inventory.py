from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.views import generic
from sahakorn.models import Stock


class InventoryView(generic.ListView):
    """inventory view"""

    template_name = 'sahakorn/inventory.html'
    context_object_name = 'stock_items'

    def get_queryset(self):
        """Get all StockItems belonging to the user"""
        return Stock.objects.filter(member__user=self.request.user)
