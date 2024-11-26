from django.db import models
from .member import Member


class Equipment(models.Model):
    """The model to store co-op equipments"""

    name = models.CharField(max_length=300)
    owner = models.ForeignKey(Member, on_delete=models.CASCADE)
    equipment_type = models.CharField(max_length=100)

    def __str__(self) -> str:
        return f"{self.name} of {self.owner}"
