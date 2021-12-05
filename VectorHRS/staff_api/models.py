from django.db import models
from django.utils.timezone import now

STATUS_CHOICES = (
    ('activated', '1'),
    ('deactivated', '2'),
    ('pending', '3'),
    ('confirmed', '4'),
    ('archived', '5'),
)

SEVERITY_CHOICES = (
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
)

SHAPE_CHOICES = (
    ('circle', '1'),
    ('square', '2'),
    ('rectangle', '3'),
    ('triangle', '4'),
)

PERSON_STEP_CHOICES = (
    ('communication', '1'),
    ('answers', '2'),
    ('pending', '3'),
    ('interview', '4'),
    ('contract', '5'),
    ('rejection', '6'),
    ('refusal', '7'),
    ('recommendation', '8'),
    ('questions', '9'),
    ('invitations', '10'),
)

STAFF_STEP_CHOICES = (
    ('communication', '1'),
    ('answers', '2'),
    ('meeting', '3'),
    ('surveys', '4'),
    ('administrative', '5'),
    ('complains', '6'),
    ('problems', '7'),
    ('feedBack', '8'),
    ('requirements', '9'),
    ('legal', '10'),
    ('questions', '11'),
    ('gifts', '12'),
    ('invitations', '13'),
)

class PersonStage(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    step = models.CharField(max_length=300, choices=PERSON_STEP_CHOICES, default='r')
    x = models.FloatField()
    status = models.CharField(max_length=300, choices=STATUS_CHOICES, default='r')
    created_date_time = models.DateTimeField(default=now)
    
class StaffStage(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    step = models.CharField(max_length=300, choices=STAFF_STEP_CHOICES, default='r')
    x = models.FloatField()
    status = models.CharField(max_length=300, choices=STATUS_CHOICES, default='r')
    created_date_time = models.DateTimeField(default=now)
   
class Person(models.Model):
    firstname = models.CharField(max_length=100, null=True, blank=True)
    lastname = models.CharField(max_length=100, null=True, blank=True)
    age = models.IntegerField()
    nationalId =  models.CharField(max_length=100, null=True, blank=True)
    status = models.CharField(max_length=300, choices=STATUS_CHOICES, default='r')
    created_date_time = models.DateTimeField(default=now)


class PersonLog(models.Model):
    description = models.CharField(max_length=100, null=True, blank=True)
    stage = models.ForeignKey(PersonStage, on_delete=models.CASCADE)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    status = models.CharField(max_length=300, choices=STATUS_CHOICES, default='r')
    created_date_time = models.DateTimeField(default=now)
    
class Expertise(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    parentId = models.ForeignKey('self', on_delete=models.PROTECT)
    status = models.CharField(max_length=300, choices=STATUS_CHOICES, default='r')
    created_date_time = models.DateTimeField(default=now)
    
class ExpertiseProfile(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    expertise = models.ForeignKey(Expertise, on_delete=models.CASCADE)
    status = models.CharField(max_length=300, choices=STATUS_CHOICES, default='r')
    created_date_time = models.DateTimeField(default=now)

class Condition(models.Model):
    severity = models.CharField(max_length=300, choices=SEVERITY_CHOICES, default='r')
    status = models.CharField(max_length=300, choices=STATUS_CHOICES, default='r')
    created_date_time = models.DateTimeField(default=now)
     
class Department(models.Model):
    description = models.CharField(max_length=100, null=True, blank=True)
    shape = models.CharField(max_length=300, choices=SHAPE_CHOICES, default='r')
    status = models.CharField(max_length=300, choices=STATUS_CHOICES, default='r')
    created_date_time = models.DateTimeField(default=now)
    
class Staff(Person):
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    condition = models.ForeignKey(Condition, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, null=True, blank=True)
    bossId = models.ForeignKey('self', on_delete=models.PROTECT)
    x = models.FloatField()
    y = models.FloatField()
    level = models.IntegerField()
    
class StaffLog(models.Model):
    description = models.CharField(max_length=100, null=True, blank=True)
    stage = models.ForeignKey(PersonStage, on_delete=models.CASCADE)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    status = models.CharField(max_length=300, choices=STATUS_CHOICES, default='r')
    created_date_time = models.DateTimeField(default=now)

class Function(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    shape = models.CharField(max_length=300, choices=SHAPE_CHOICES, default='r')
    status = models.CharField(max_length=300, choices=STATUS_CHOICES, default='r')
    created_date_time = models.DateTimeField(default=now)    

class StaffFunctions(models.Model):
    function = models.ForeignKey(Function, on_delete=models.CASCADE)
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    status = models.CharField(max_length=300, choices=STATUS_CHOICES, default='r')
    created_date_time = models.DateTimeField(default=now)   
    
class Address(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    description = models.CharField(max_length=100, null=True, blank=True)
    address1 = models.CharField(max_length=100, null=True, blank=True)
    address2 = models.CharField(max_length=100, null=True, blank=True)
    zip = models.CharField(max_length=10, null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
    status = models.CharField(max_length=300, choices=STATUS_CHOICES, default='r')
    created_date_time = models.DateTimeField(default=now)   

class Phone(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    description = models.CharField(max_length=100, null=True, blank=True)
    phoneNumber = models.CharField(max_length=100, null=True, blank=True)
    status = models.CharField(max_length=300, choices=STATUS_CHOICES, default='r')
    created_date_time = models.DateTimeField(default=now)   
    
    
class Comments(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    status = models.CharField(max_length=300, choices=STATUS_CHOICES, default='r')
    created_date_time = models.DateTimeField(default=now) 