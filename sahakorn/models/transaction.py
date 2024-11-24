from django.db import models
from django.core.validators import MinValueValidator
from .market_item import MarketItem
from .member import Member


class Transaction(models.Model):
    """A model to record transactions"""

    market_item = models.ForeignKey(MarketItem, on_delete=models.CASCADE)
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    quantity = models.IntegerField(validators=[MinValueValidator(0)])
    total_paid = models.FloatField()
    date = models.DateField()
