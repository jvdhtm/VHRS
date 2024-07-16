from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Role, App
import logging

logger = logging.getLogger(__name__)

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['email', 'first_name', 'last_name', 'is_active', 'is_staff']
    fieldsets = UserAdmin.fieldsets + (
        ('Custom Fields', {'fields': ('title',)}),
    )

    def save_model(self, request, obj, form, change):
        logger.debug("Saving user: %s", obj.email)

        if 'password' in form.cleaned_data:
            obj.set_password(form.cleaned_data['password'])
        
        # Save the user instance
        obj.save()

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Role)
admin.site.register(App)
