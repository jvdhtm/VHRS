from django.db import models
from base.models import BaseModel


class User(BaseModel):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    password = models.CharField(max_length=1024)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
       return self.email 

class App(BaseModel): 
   title = models.CharField(
        max_length=30,
        unique=True,
    )
   pathUrl =  models.CharField(max_length=30)
   
   def __str__(self):
       return self.title 

class Role(BaseModel):
    
    PERMISSION_CHOICES = (
        ('R', 'r'),
        ('W', 'W'),
        ('RW', 'rw'),
        ('RWD', 'rwd'),
    )
    title = models.CharField(max_length=30)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    permission = models.CharField(max_length=3, choices=PERMISSION_CHOICES, default='r')
    app = models.ForeignKey(App, on_delete=models.CASCADE)
    
    def __str__(self):
       return self.title 
   
class Login(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Login for {self.user.email} at {self.timestamp}"