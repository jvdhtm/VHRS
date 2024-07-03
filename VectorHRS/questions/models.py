from django.db import models
from base.models import BaseModel
from utils.db_fields import SanitizedHTMLField
from django.utils.timezone import now
from people.models import Person
from base.constants import STATUS_CHOICES
# Create your models here.

    
class Question(BaseModel):
    name = models.CharField(max_length=100, null=True, blank=True)
    html = SanitizedHTMLField(blank=True, null=True, help_text="")
    description = models.CharField(max_length=500, null=True, blank=True)
    autor = models.ForeignKey(Person, on_delete=models.CASCADE)

class QuestionsRelatedLink(BaseModel):
    question =  models.ForeignKey(Question, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=True, blank=True)
     
class answers(BaseModel):
    name = models.CharField(max_length=100, null=True, blank=True)
    html = SanitizedHTMLField(blank=True, null=True, help_text="")
    autor = models.ForeignKey(Person, on_delete=models.CASCADE)
    question =  models.ForeignKey(Question, on_delete=models.CASCADE)