from django.db import models
from django.core.validators import MinValueValidator
from .stock import Stock
from .item_type import ItemType
from .member import Member


class MarketItem(models.Model):
    """Model for Market items"""

    p_name = models.ForeignKey(Stock, on_delete=models.CASCADE)
    quantity = models.IntegerField(validators=[MinValueValidator(0)])
    item_type = models.ForeignKey(ItemType, on_delete=models.CASCADE)
    producer = models.ForeignKey(Member, on_delete=models.CASCADE)
    price = models.IntegerField(validators=[MinValueValidator(0)])

    def __str__(self):
        return f"{self.p_name} x {self.quantity} by {self.producer} "
