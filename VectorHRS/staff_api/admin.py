from django.contrib import admin

# Register your models here.
from staff_api.models import (
    StaffStage, Condition, Department, Staff, StaffLog, Function, StaffFunctions, StaffComment,
    Position, Candidate, HiringStage, Leave, Survey, SurveyQuestion, SurveyResponse, OneOnOne
)

admin.site.register(StaffStage) 
admin.site.register(Condition)
admin.site.register(Department)
admin.site.register(Staff)
admin.site.register(StaffLog)
admin.site.register(Function)
admin.site.register(StaffFunctions)
admin.site.register(StaffComment)

# ==================== HIRING & RECRUITMENT ADMIN ====================

admin.site.register(Position)
admin.site.register(Candidate)
admin.site.register(HiringStage)

# ==================== LEAVE & CALENDAR ADMIN ====================

admin.site.register(Leave)

# ==================== SURVEY ADMIN ====================

admin.site.register(Survey)
admin.site.register(SurveyQuestion)
admin.site.register(SurveyResponse)

# ==================== 1-ON-1 MEETING ADMIN ====================

admin.site.register(OneOnOne)
