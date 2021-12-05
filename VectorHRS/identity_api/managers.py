from django.utils.translation import ugettext_lazy as _
from .models import App, Role, User


class CustomUserManager:
    def create_user(self, email, passcode, first_name,last_name,is_active):
        if not email:
            raise ValueError(_('The Email must be set'))
        newUser = User.objects.update_or_create(email, passcode, first_name,last_name,is_active)
        return newUser
        
    def register_app(self, title, pathUrl):
        newApp = App.objects.update_or_create(title, pathUrl)
        return newApp
    
    def create_role(self, title ,user, permission, app):
        newRole = Role.objects.update_or_create(title, user, permission, app)
        return newRole 

