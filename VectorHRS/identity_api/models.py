from django.db import models


class User(models.Model):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    passcode = models.CharField(max_length=1024)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
       return self.email 

class App(models.Model): 
   title = models.CharField(
        max_length=30,
        unique=True,
    )
   pathUrl =  models.CharField(max_length=30)
   
   def __str__(self):
       return self.title 

class Role(models.Model):
    
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