from django.db import models
from django.utils.timezone import now
from base.constants import PERSON_STEP_CHOICES, STATUS_CHOICES
from base.models import BaseModel

class PersonStage(BaseModel):
    step = models.CharField(max_length=1000, choices=PERSON_STEP_CHOICES)
    x = models.FloatField()
    
    
class Person(BaseModel):
    firstname = models.CharField(max_length=100, null=True, blank=True)
    lastname = models.CharField(max_length=100, null=True, blank=True)
    age = models.IntegerField()
    nationalId =  models.CharField(max_length=100, null=True, blank=True)
    

class Address(BaseModel):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    address1 = models.CharField(max_length=100, null=True, blank=True)
    address2 = models.CharField(max_length=100, null=True, blank=True)
    zip = models.CharField(max_length=10, null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
       

class Phone(BaseModel):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    phoneNumber = models.CharField(max_length=100, null=True, blank=True)
       

class PersonLog(BaseModel):
    stage = models.ForeignKey(PersonStage, on_delete=models.CASCADE)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    
    
class Expertise(BaseModel):
    parentId = models.ForeignKey('self', null=True, blank=True, on_delete=models.PROTECT)
    
    
class ExpertiseProfile(BaseModel):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    expertise = models.ForeignKey(Expertise, on_delete=models.CASCADE)
