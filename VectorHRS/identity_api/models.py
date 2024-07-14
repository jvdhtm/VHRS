from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, Group, Permission
from django.db import models
from django.utils.translation import gettext_lazy as _
from base.models import BaseModel

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError(_('The Email field must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        if password:
            user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))

        return self.create_user(email, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin, BaseModel):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    password = models.CharField(_('password'), max_length=128, default='')
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    # Define related_name for groups and user_permissions
    groups = models.ManyToManyField(
        Group,
        related_name='custom_user_groups',  # Example of custom related_name
        blank=True,
        help_text=_('The groups this user belongs to. A user will get all permissions granted to each of their groups.'),
        verbose_name=_('groups'),
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='custom_user_permissions',  # Example of custom related_name
        blank=True,
        help_text=_('Specific permissions for this user.'),
        verbose_name=_('user permissions'),
    )

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email

    def save(self, *args, **kwargs):
        # Ensure password is set correctly if provided
        if self.password:
            self.set_password(self.password)
        super().save(*args, **kwargs)
class App(BaseModel):
    title = models.CharField(
        max_length=30,
        unique=True,
    )
    pathUrl = models.CharField(max_length=30)
    app_name = models.CharField(max_length=30, default='default_app_name')

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
