from django.db import models
from django.core.validators import MinValueValidator
from .member import Member


class Loans(models.Model):
    """Model to record loans taken by members"""

    class Meta:
        constraints = [
            models.CheckConstraint(
                check=models.Q(
                    paid__lte=models.F("amount"),
                ),
                name="paid amount less than borrow amount",
            )
        ]

    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    amount = models.FloatField(validators=[MinValueValidator(0)])
    loan_date = models.DateField()
    paid = models.FloatField(validators=[MinValueValidator(0)], default=0)

    def __str__(self):
        return f"Loan of {self.member} from {self.loan_date}"
