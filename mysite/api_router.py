from rest_framework.routers import DefaultRouter
from sahakorn.views import (
    BorrowingViewSet,
    CommonFeeViewSet,
    EquipmentViewSet,
    ItemTypeViewSet,
    LoansViewSet,
    MarketItemViewSet,
    MemberViewSet,
    ProducerTypeViewSet,
    StockViewSet,
    TransactionViewSet,
)

router = DefaultRouter()
router.register(r"borrowing", BorrowingViewSet, basename="borrowing")
router.register(r"common_fee", CommonFeeViewSet, basename="common_fee")
router.register(r"equipment", EquipmentViewSet, basename="equipment")
router.register(r"item_type", ItemTypeViewSet, basename="item_type")
router.register(r"loans", LoansViewSet, basename="loans")
router.register(r"market_item", MarketItemViewSet, basename="market_item")
router.register(r"member", MemberViewSet, basename="member")
router.register(r"producer_type", ProducerTypeViewSet, basename="producer_type")
router.register(r"stock", StockViewSet, basename="stock")
router.register(r"transaction", TransactionViewSet, basename="transaction")
