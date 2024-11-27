from django.urls import path
from . import views

app_name = "sahakorn"
urlpatterns = [
    path("", views.MemberListView.as_view(), name="index"),
    path("equipment/", views.EquipmentView.as_view(), name="equipment"),
    path("market/", views.MarketView.as_view(), name="market"),
    path("finance/", views.FinanceView.as_view(), name="finance"),
    path("inventory/", views.InventoryView.as_view(), name="inventory"),
    path("transaction/", views.TransactionView.as_view(), name="transaction"),
    path("profile/", views.ProfileView.as_view(), name="profile")
]