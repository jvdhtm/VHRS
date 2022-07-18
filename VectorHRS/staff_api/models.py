from django.db import models
from django.utils.timezone import now

STATUS_CHOICES = (
    ('activated', 'activated'),
    ('deactivated', 'deactivated'),
    ('pending', 'pending'),
    ('confirmed', 'confirmed'),
    ('archived', 'archived'),
)

SEVERITY_CHOICES = (
    ('small', 'small'),
    ('mild', 'mild'),
    ('sever', 'sever'),
)

SHAPE_CHOICES = (
    ('circle', 'circle'),
    ('square', 'square'),
    ('rectangle', 'rectangle'),
    ('triangle', 'triangle'),
)

PERSON_STEP_CHOICES = (
    ('communication', 'communication'),
    ('answers', 'answers'),
    ('pending', 'pending'),
    ('interview', 'interview'),
    ('contract', 'contract'),
    ('rejection', 'rejection'),
    ('refusal', 'refusal'),
    ('recommendation', 'recommendation'),
    ('questions', 'questions'),
    ('invitations', 'invitations'),
)

STAFF_STEP_CHOICES = (
    ('communication', 'communication'),
    ('answers', 'answers'),
    ('meeting', 'meeting'),
    ('surveys', 'surveys'),
    ('administrative', 'administrative'),
    ('complains', 'complains'),
    ('problems', 'problems'),
    ('feedBack', 'feedBack'),
    ('requirements', 'requirements'),
    ('legal', 'legal'),
    ('questions', 'questions'),
    ('gifts', 'gifts'),
    ('invitations', 'invitations'),
)

class PersonStage(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    step = models.CharField(max_length=1000, choices=PERSON_STEP_CHOICES)
    x = models.FloatField()
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)
    
class StaffStage(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    step = models.CharField(max_length=1000, choices=STAFF_STEP_CHOICES)
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
    
class Address(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    description = models.CharField(max_length=100, null=True, blank=True)
    address1 = models.CharField(max_length=100, null=True, blank=True)
    address2 = models.CharField(max_length=100, null=True, blank=True)
    zip = models.CharField(max_length=10, null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)   

class Phone(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    description = models.CharField(max_length=100, null=True, blank=True)
    phoneNumber = models.CharField(max_length=100, null=True, blank=True)
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now)   
    
    
class Comments(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    status = models.CharField(max_length=1000, choices=STATUS_CHOICES)
    created_date_time = models.DateTimeField(default=now) 