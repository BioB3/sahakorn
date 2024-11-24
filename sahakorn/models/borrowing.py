from django.db import models
from .equipment import Equipment
from .member import Member


class Borrowing(models.Model):
    """Models to record equipment borrowing"""
    class Meta:
        constraints = [
            models.CheckConstraint(
                check=models.Q(
                    r_date__gte=models.F("s_date")
                ),
                name="equipment must be return after borrowing date.",
            )
        ]

    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE)
    user = models.ForeignKey(Member, on_delete=models.CASCADE)
    s_date = models.DateField()
    r_date = models.DateField()

    def __str__(self):
        return (
            f"{self.user} borrows {self.equipment} from {self.s_date} to {self.r_date}"
        )
