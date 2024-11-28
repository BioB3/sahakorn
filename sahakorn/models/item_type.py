from django.db import models


class ItemType(models.Model):
    """Model for Item Type"""

    name = models.CharField(max_length=300)
    color = models.CharField(max_length=30)

    def __str__(self) -> str:
        return self.name
