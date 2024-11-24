"""The member model."""

from django.db import models
from django.contrib.auth.models import User
from .producer_type import ProducerType


class Member(models.Model):
    """The model for a certain co-op member."""

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    produce_type = models.ManyToManyField(ProducerType)

    def __str__(self) -> str:
        return self.name
