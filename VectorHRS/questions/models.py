from django.db import models
from base.models import BaseModel
from utils.db_fields import SanitizedHTMLField
from django.utils.timezone import now
from people.models import Person
from base.constants import STATUS_CHOICES

class Question(BaseModel):
    html = SanitizedHTMLField(blank=True, null=True, help_text="")
    autor = models.ForeignKey(Person, on_delete=models.CASCADE)

class QuestionsRelatedLink(BaseModel):
    question =  models.ForeignKey(Question, on_delete=models.CASCADE)
     
class answers(BaseModel):
    html = SanitizedHTMLField(blank=True, null=True, help_text="")
    autor = models.ForeignKey(Person, on_delete=models.CASCADE)
    question =  models.ForeignKey(Question, on_delete=models.CASCADE)
