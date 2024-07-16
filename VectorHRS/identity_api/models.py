from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _
from base.models import BaseModel
from django.contrib.auth.models import AbstractUser



class CustomUser(AbstractUser, BaseModel):
    title = models.CharField(max_length=30)
    def __str__(self):
        return self.username
class App(BaseModel):
    title = models.CharField(
        max_length=30,
        unique=True,
    )
    pathUrl = models.CharField(max_length=30)
    app_name = models.CharField(max_length=30, default='default_app_name')

    def __str__(self):
        return self.title

class Account(BaseModel):
    name = models.CharField(max_length=100)
    users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='accounts')

    def __str__(self):
        return self.name

class Role(BaseModel):
    PERMISSION_CHOICES = (
        ('R', 'r'),
        ('W', 'W'),
        ('RW', 'rw'),
        ('RWD', 'rwd'),
    )
    title = models.CharField(max_length=30)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    permission = models.CharField(max_length=3, choices=PERMISSION_CHOICES, default='r')
    app = models.ForeignKey(App, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Login(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Login for {self.user.email} at {self.timestamp}"