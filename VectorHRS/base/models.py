from django.db import models
from django.utils.timezone import now
from base.constants import STATUS_CHOICES

class BaseModel(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    status = models.CharField(max_length=100, choices=STATUS_CHOICES, default='pending')
    created_date_time = models.DateTimeField(default=now)
    updated_date_time = models.DateTimeField(default=now)

    class Meta:
        abstract = True
        ordering = ['-created_date_time']

    def __str__(self):
        return self.name or f"{self.__class__.__name__} #{self.id}"
