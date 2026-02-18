from django.db import models
from base.models import BaseModel
from utils.db_fields import SanitizedHTMLField
from django.utils.timezone import now
from people.models import Person
from base.constants import STATUS_CHOICES

class NewsLetter(BaseModel):
    imageUrl = models.ImageField(upload_to='blah', null=True)
    html = SanitizedHTMLField(blank=True, null=True, help_text="")
    autor = models.ForeignKey(Person, on_delete=models.CASCADE)
    
class NewsRelatedLink(BaseModel):
    news =  models.ForeignKey(NewsLetter, on_delete=models.CASCADE)
    
    
class Comment(BaseModel):
    html = SanitizedHTMLField(blank=True, null=True, help_text="")
    autor = models.ForeignKey(Person, on_delete=models.CASCADE)
    news =  models.ForeignKey(NewsLetter, on_delete=models.CASCADE)
