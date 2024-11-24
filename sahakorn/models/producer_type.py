from django.db import models

class ProducerType(models.Model):
    """Model to record what type of produce a member produce."""
    
    name = models.CharField(max_length=300)
    color = models.CharField(max_length=30)
