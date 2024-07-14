
from django.db import models
from django.utils.timezone import now
from base.constants import STATUS_CHOICES

class BaseModel(models.Model):
    status = models.CharField(max_length=100, choices=STATUS_CHOICES, default='pending')
    created_date_time = models.DateTimeField(default=now)
    updated_date_time = models.DateTimeField(default=now)

    class Meta:
        abstract = True