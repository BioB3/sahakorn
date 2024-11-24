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
