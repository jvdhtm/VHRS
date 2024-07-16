from django.contrib import admin

# Register your models here.
from .models import App, Role, CustomUser
 
admin.site.register(CustomUser) 
admin.site.register(Role) 
admin.site.register(App)