from django.db import models
from django.core.validators import MinValueValidator
from .item_type import ItemType
from .member import Member


class Stock(models.Model):
    """Model for item stocks"""

    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    p_name = models.CharField(max_length=300)
    quantity = models.IntegerField(validators=[MinValueValidator(0)])
    item_type = models.ManyToManyField(ItemType)

    def __str__(self):
        return f"{self.quantity} {self.p_name} of {self.member}"
