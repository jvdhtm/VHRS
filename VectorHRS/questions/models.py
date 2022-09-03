from django.db import models
from utils.db_fields import SanitizedHTMLField
from django.utils.timezone import now
from people.models import Person
from base.constants import STATUS_CHOICES
# Create your models here.

    
class Question(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    html = SanitizedHTMLField(blank=True, null=True, help_text="")
    description = models.CharField(max_length=500, null=True, blank=True)
    autor = models.ForeignKey(Person, on_delete=models.CASCADE)
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)

class QuestionsRelatedLink(models.Model):
    question =  models.ForeignKey(Question, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=True, blank=True)
    created_date_time = models.DateTimeField(default=now)
     
class answers(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    html = SanitizedHTMLField(blank=True, null=True, help_text="")
    autor = models.ForeignKey(Person, on_delete=models.CASCADE)
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)
    question =  models.ForeignKey(Question, on_delete=models.CASCADE)