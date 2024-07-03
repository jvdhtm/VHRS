from django.db import models
from django.utils.timezone import now

from base.constants import  SEVERITY_CHOICES, SHAPE_CHOICES, STAFF_STEP_CHOICES, STATUS_CHOICES
from base.models import BaseModel
from people.models import Person, PersonStage

class StaffStage(BaseModel):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    step = models.CharField(max_length=1000, choices=STAFF_STEP_CHOICES)
    x = models.FloatField()
   

class Condition(BaseModel):
    severity = models.CharField(max_length=1000, choices=SEVERITY_CHOICES)
     
class Department(BaseModel):
    name = models.CharField(max_length=100, null=True, blank=True)
    parentId = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)
    description = models.CharField(max_length=100, null=True, blank=True)
    shape = models.CharField(max_length=1000, choices=SHAPE_CHOICES)
    
class Staff(BaseModel):
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    condition = models.ForeignKey(Condition, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, null=True, blank=True)
    bossId = models.ForeignKey('self', null=True, blank=True , on_delete=models.CASCADE)
    who = models.ForeignKey(Person, on_delete=models.CASCADE)
    x = models.FloatField()
    y = models.FloatField()
    level = models.IntegerField()
    
class StaffLog(BaseModel):
    description = models.CharField(max_length=100, null=True, blank=True)
    stage = models.ForeignKey(PersonStage, on_delete=models.CASCADE)
    with_person = models.ForeignKey(Person, on_delete=models.CASCADE , null=True, blank=True)

class Function(BaseModel):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    shape = models.CharField(max_length=1000, choices=SHAPE_CHOICES)    

class StaffFunctions(BaseModel):
    function = models.ForeignKey(Function, on_delete=models.CASCADE)
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)   
      
class StaffComment(BaseModel):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True) 