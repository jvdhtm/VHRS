from django.contrib import admin

# Register your models here.
# Register your models here.
from staff_api.models import  StaffStage,  Condition, Department, Staff, StaffLog, Function, StaffFunctions, StaffComment

admin.site.register(StaffStage) 
admin.site.register(Condition)
admin.site.register(Department)
admin.site.register(Staff)
admin.site.register(StaffLog)
admin.site.register(Function)
admin.site.register(StaffFunctions)
admin.site.register(StaffComment)