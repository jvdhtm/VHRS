from django.db import models
from django.utils.timezone import now

from base.constants import  SEVERITY_CHOICES, SHAPE_CHOICES, STAFF_STEP_CHOICES, STATUS_CHOICES
from people.models import Person, PersonStage

class StaffStage(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    step = models.CharField(max_length=1000, choices=STAFF_STEP_CHOICES)
    x = models.FloatField()
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)
   

class Condition(models.Model):
    severity = models.CharField(max_length=1000, choices=SEVERITY_CHOICES)
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)
     
class Department(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    parentId = models.ForeignKey('self', null=True, blank=True, on_delete=models.PROTECT)
    description = models.CharField(max_length=100, null=True, blank=True)
    shape = models.CharField(max_length=1000, choices=SHAPE_CHOICES)
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)
    
class Staff(models.Model):
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    condition = models.ForeignKey(Condition, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, null=True, blank=True)
    bossId = models.ForeignKey('self', null=True, blank=True , on_delete=models.PROTECT)
    who = models.ForeignKey(Person, on_delete=models.CASCADE)
    x = models.FloatField()
    y = models.FloatField()
    level = models.IntegerField()
    
class StaffLog(models.Model):
    description = models.CharField(max_length=100, null=True, blank=True)
    stage = models.ForeignKey(PersonStage, on_delete=models.CASCADE)
    with_person = models.ForeignKey(Person, on_delete=models.CASCADE , null=True, blank=True)
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)

class Function(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    shape = models.CharField(max_length=1000, choices=SHAPE_CHOICES)
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)    

class StaffFunctions(models.Model):
    function = models.ForeignKey(Function, on_delete=models.CASCADE)
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)   
      
class Comments(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now) 