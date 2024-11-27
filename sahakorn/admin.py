from django.contrib import admin
from sahakorn.models import Stock, ItemType, ProducerType, Loans, Borrowing, Equipment, MarketItem, Transaction, Member, CommonFee

# Register your models here.

admin.site.register(Stock)
admin.site.register(ItemType)
admin.site.register(ProducerType)
admin.site.register(Loans)
admin.site.register(Borrowing)
admin.site.register(Equipment)
admin.site.register(MarketItem)
admin.site.register(Transaction)
admin.site.register(Member)
admin.site.register(CommonFee)
