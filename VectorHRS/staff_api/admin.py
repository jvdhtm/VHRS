from django.contrib import admin

# Register your models here.
# Register your models here.
from staff_api.models import PersonStage, StaffStage, Person, PersonLog, Expertise, ExpertiseProfile, Condition, Department, Staff, StaffLog, Function, StaffFunctions, Address, Phone, Comments

 
admin.site.register(PersonStage) 
admin.site.register(StaffStage) 
admin.site.register(Person)
admin.site.register(PersonLog) 
admin.site.register(Expertise)
admin.site.register(ExpertiseProfile) 
admin.site.register(Condition)
admin.site.register(Department)
admin.site.register(Staff)
admin.site.register(StaffLog)
admin.site.register(Function)
admin.site.register(StaffFunctions)
admin.site.register(Address)
admin.site.register(Phone)
admin.site.register(Comments)