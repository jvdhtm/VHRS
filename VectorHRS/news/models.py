from pydoc import describe
from django.db import models
from base.models import BaseModel
from utils.db_fields import SanitizedHTMLField
from django.utils.timezone import now
from people.models import Person
from base.constants import STATUS_CHOICES
# Create your models here.

    
class NewsLetter(BaseModel):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=1000, null=True, blank=True)
    imageUrl = models.ImageField(upload_to='blah', null=True)
    html = SanitizedHTMLField(blank=True, null=True, help_text="")
    autor = models.ForeignKey(Person, on_delete=models.CASCADE)
    
class NewsRelatedLink(BaseModel):
    news =  models.ForeignKey(NewsLetter, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=True, blank=True)
    
    
class Comment(BaseModel):
    name = models.CharField(max_length=100, null=True, blank=True)
    html = SanitizedHTMLField(blank=True, null=True, help_text="")
    autor = models.ForeignKey(Person, on_delete=models.CASCADE)
    news =  models.ForeignKey(NewsLetter, on_delete=models.CASCADE)