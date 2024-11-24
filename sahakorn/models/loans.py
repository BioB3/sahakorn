from django.db import models
from django.core.validators import MinValueValidator
from .member import Member


class Loans(models.Model):
    """Model to record loans taken by members"""

    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    amount = models.FloatField()
    loan_date = models.DateField()
    payed = models.FloatField(validators=[MinValueValidator(0)])

    def __str__(self):
        return f"Loan of {self.member} from {self.loan_date}"
