from django.db import models
from django.utils.timezone import now
from base.constants import PERSON_STEP_CHOICES, STATUS_CHOICES

# Create your models here.
class PersonStage(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    step = models.CharField(max_length=1000, choices=PERSON_STEP_CHOICES)
    x = models.FloatField()
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)
    
class Person(models.Model):
    firstname = models.CharField(max_length=100, null=True, blank=True)
    lastname = models.CharField(max_length=100, null=True, blank=True)
    age = models.IntegerField()
    nationalId =  models.CharField(max_length=100, null=True, blank=True)
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)

class Address(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    description = models.CharField(max_length=100, null=True, blank=True)
    address1 = models.CharField(max_length=100, null=True, blank=True)
    address2 = models.CharField(max_length=100, null=True, blank=True)
    zip = models.CharField(max_length=10, null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)   

class Phone(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    description = models.CharField(max_length=100, null=True, blank=True)
    phoneNumber = models.CharField(max_length=100, null=True, blank=True)
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)  

class PersonLog(models.Model):
    description = models.CharField(max_length=100, null=True, blank=True)
    stage = models.ForeignKey(PersonStage, on_delete=models.CASCADE)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)
    
class Expertise(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    parentId = models.ForeignKey('self', null=True, blank=True, on_delete=models.PROTECT)
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)
    
class ExpertiseProfile(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    expertise = models.ForeignKey(Expertise, on_delete=models.CASCADE)
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)