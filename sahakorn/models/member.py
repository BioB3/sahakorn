"""The member model."""

from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
from .producer_type import ProducerType


class Member(models.Model):
    """The model for a certain co-op member."""

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    produce_type = models.ManyToManyField(ProducerType)

    def __str__(self) -> str:
        return self.name

    @receiver(post_save, sender=User)
    def member_create(sender, instance=None, created=False, **kwargs):
        if created:
            Member.objects.create(user=instance, name=instance.username)