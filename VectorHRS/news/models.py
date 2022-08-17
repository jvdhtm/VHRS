from django.db import models
from VectorHRS.utils.db_fields import SanitizedHTMLField
from django.utils.timezone import now
from people.models import Person
# Create your models here.
class StaffStage(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    html = SanitizedHTMLField(blank=True, null=True, help_text="")
    autor = models.ForeignKey(Person, on_delete=models.CASCADE)
    step = models.CharField(max_length=1000, choices=STAFF_STEP_CHOICES)
    x = models.FloatField()
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)