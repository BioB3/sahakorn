from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from calendar import month_name
from .member import Member


class CommonFee(models.Model):
    """A record to store common fee payment of a member"""

    month = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(12)]
    )
    year = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(9999)]
    )
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    total_paid = models.FloatField(validators=[MinValueValidator(0)])
    total_due = models.FloatField(validators=[MinValueValidator(0)], default=100)

    def get_month(self) -> str:
        """Get the actual month name from month field, which is from 1-12."""
        return month_name[self.month]

    def __str__(self):
        return f"Fee of {self.member} on {self.get_month()} {self.year}"
