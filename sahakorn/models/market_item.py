from django.db import models
from django.core.validators import MinValueValidator
from .stock import Stock


class MarketItem(models.Model):
    """Model for Market items"""

    stock = models.ForeignKey(Stock, on_delete=models.CASCADE)
    quantity = models.IntegerField(validators=[MinValueValidator(0)])
    price = models.IntegerField(validators=[MinValueValidator(0)])

    @property
    def p_name(self) -> str:
        """Get product name."""
        return self.stock.p_name

    @property
    def member(self) -> str:
        """return the god damn member"""
        return self.stock.member

    def __str__(self):
        return f"{self.p_name} x {self.quantity} by {self.member} "
