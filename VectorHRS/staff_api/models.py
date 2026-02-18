from django.db import models
from django.utils.timezone import now

from base.constants import (
    SEVERITY_CHOICES, SHAPE_CHOICES, STAFF_STEP_CHOICES, STATUS_CHOICES,
    POSITION_STATUS_CHOICES, HIRING_STAGE_CHOICES, EMPLOYMENT_TYPE_CHOICES,
    LEAVE_TYPE_CHOICES, LEAVE_STATUS_CHOICES, SURVEY_TYPE_CHOICES,
    QUESTION_TYPE_CHOICES
)
from base.models import BaseModel
from people.models import Person, PersonStage

class StaffStage(BaseModel):
    step = models.CharField(max_length=1000, choices=STAFF_STEP_CHOICES)
    x = models.FloatField()

class Condition(BaseModel):
    severity = models.CharField(max_length=1000, choices=SEVERITY_CHOICES)
      
class Department(BaseModel):
    parentId = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)
    shape = models.CharField(max_length=1000, choices=SHAPE_CHOICES)
    
class Staff(BaseModel):
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    condition = models.ForeignKey(Condition, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, null=True, blank=True)
    bossId = models.ForeignKey('self', null=True, blank=True , on_delete=models.CASCADE)
    who = models.ForeignKey(Person, on_delete=models.CASCADE)
    x = models.FloatField()
    y = models.FloatField()
    level = models.IntegerField()
    
class StaffLog(BaseModel):
    stage = models.ForeignKey(PersonStage, on_delete=models.CASCADE)
    with_person = models.ForeignKey(Person, on_delete=models.CASCADE , null=True, blank=True)

class Function(BaseModel):
    shape = models.CharField(max_length=1000, choices=SHAPE_CHOICES)    

class StaffFunctions(BaseModel):
    function = models.ForeignKey(Function, on_delete=models.CASCADE)
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)   
      
class StaffComment(BaseModel):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)


# ==================== HIRING & RECRUITMENT MODELS ====================

class Position(BaseModel):
    """Job position that can be vacant or filled"""
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    requirements = models.TextField(null=True, blank=True)
    salary_min = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    salary_max = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    employment_type = models.CharField(max_length=50, choices=EMPLOYMENT_TYPE_CHOICES, default='full_time')
    location = models.CharField(max_length=200, null=True, blank=True)
    reporting_to = models.ForeignKey(Staff, null=True, blank=True, on_delete=models.SET_NULL, related_name='manages_positions')
    filled_by = models.ForeignKey(Staff, null=True, blank=True, on_delete=models.SET_NULL, related_name='filled_positions')
    opened_date = models.DateField(default=now)
    position_status = models.CharField(max_length=50, choices=POSITION_STATUS_CHOICES, default='vacant')

class Candidate(BaseModel):
    """Job candidate for hiring pipeline"""
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=100, null=True, blank=True)
    position = models.ForeignKey(Position, on_delete=models.CASCADE, related_name='candidates')
    current_stage = models.CharField(max_length=50, choices=HIRING_STAGE_CHOICES, default='applications')
    rating = models.IntegerField(null=True, blank=True)
    tags = models.CharField(max_length=500, null=True, blank=True)
    resume = models.FileField(upload_to='resumes/', null=True, blank=True)
    last_activity = models.DateTimeField(default=now)
    interview_date = models.DateTimeField(null=True, blank=True)
    notes = models.TextField(null=True, blank=True)

class HiringStage(BaseModel):
    """Track candidate movement through pipeline"""
    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE, related_name='stage_history')
    stage = models.CharField(max_length=50, choices=HIRING_STAGE_CHOICES)
    notes = models.TextField(null=True, blank=True)
    feedback = models.TextField(null=True, blank=True)
    moved_by = models.ForeignKey('identity_api.User', null=True, blank=True, on_delete=models.SET_NULL)
    moved_at = models.DateTimeField(default=now)


# ==================== LEAVE & CALENDAR MODELS ====================

class Leave(BaseModel):
    """Employee leave/time off requests"""
    person = models.ForeignKey(Person, on_delete=models.CASCADE, related_name='leaves')
    leave_type = models.CharField(max_length=50, choices=LEAVE_TYPE_CHOICES)
    start_date = models.DateField()
    end_date = models.DateField()
    reason = models.TextField(null=True, blank=True)
    leave_status = models.CharField(max_length=50, choices=LEAVE_STATUS_CHOICES, default='pending')
    approved_by = models.ForeignKey('identity_api.User', null=True, blank=True, on_delete=models.SET_NULL)
    approved_at = models.DateTimeField(null=True, blank=True)


# ==================== SURVEY MODELS ====================

class Survey(BaseModel):
    """Employee surveys"""
    survey_type = models.CharField(max_length=50, choices=SURVEY_TYPE_CHOICES)
    anonymous = models.BooleanField(default=False)
    deadline = models.DateTimeField(null=True, blank=True)
    recurring = models.BooleanField(default=False)
    assigned_to = models.ManyToManyField(Staff, blank=True, related_name='assigned_surveys')
    created_by = models.ForeignKey('identity_api.User', on_delete=models.CASCADE)

class SurveyQuestion(BaseModel):
    """Individual questions within a survey"""
    survey = models.ForeignKey(Survey, on_delete=models.CASCADE, related_name='questions')
    question_text = models.TextField()
    question_type = models.CharField(max_length=50, choices=QUESTION_TYPE_CHOICES)
    options = models.JSONField(null=True, blank=True)
    order = models.IntegerField(default=0)
    required = models.BooleanField(default=True)
    
    class Meta:
        ordering = ['order']

class SurveyResponse(BaseModel):
    """Individual responses to survey questions"""
    survey = models.ForeignKey(Survey, on_delete=models.CASCADE, related_name='responses')
    question = models.ForeignKey(SurveyQuestion, on_delete=models.CASCADE)
    respondent = models.ForeignKey(Staff, null=True, blank=True, on_delete=models.SET_NULL)
    answer = models.JSONField()
    submitted_at = models.DateTimeField(default=now)
    
    class Meta:
        unique_together = ['survey', 'question', 'respondent']


# ==================== 1-ON-1 MEETING MODELS ====================

class OneOnOne(BaseModel):
    """1-on-1 meeting management"""
    title = models.CharField(max_length=200)
    manager = models.ForeignKey(Staff, on_delete=models.CASCADE, related_name='meetings_as_manager')
    employee = models.ForeignKey(Staff, on_delete=models.CASCADE, related_name='meetings_as_employee')
    scheduled_at = models.DateTimeField()
    duration_minutes = models.IntegerField(default=30)
    agenda = models.TextField(null=True, blank=True)
    shared_notes = models.TextField(null=True, blank=True)
    private_notes = models.TextField(null=True, blank=True)
    action_items = models.JSONField(null=True, blank=True)
    recurring = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(null=True, blank=True)
    
    class Meta:
        verbose_name = 'One-on-One'
        verbose_name_plural = 'One-on-Ones'
