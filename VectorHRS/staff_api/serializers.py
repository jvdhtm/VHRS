from rest_framework.serializers import ModelSerializer
from staff_api.models import (
    StaffStage, Condition, Department, Staff, StaffLog, Function, StaffFunctions, StaffComment,
    Position, Candidate, HiringStage, Leave, Survey, SurveyQuestion, SurveyResponse, OneOnOne
)

class StaffStageSerializer(ModelSerializer):
    class Meta:
        model = StaffStage
        fields = ['id', 'name', 'description', 'step', 'x', 'status', 'created_date_time']

class ConditionSerializer(ModelSerializer):
    class Meta:
        model = Condition
        fields = ['id', 'name', 'description', 'severity', 'status', 'created_date_time']

class DepartmentSerializer(ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'name', 'description', 'parentId', 'shape', 'status', 'created_date_time']

class StaffSerializer(ModelSerializer):
    class Meta:
        model = Staff
        fields = ['id', 'name', 'description', 'department', 'condition', 'title', 'bossId', 'who', 'x', 'y', 'level', 'status', 'created_date_time']

class StaffLogSerializer(ModelSerializer):
    class Meta:
        model = StaffLog
        fields = ['id', 'name', 'description', 'stage', 'with_person', 'status', 'created_date_time']

class FunctionSerializer(ModelSerializer):
    class Meta:
        model = Function
        fields = ['id', 'name', 'description', 'shape', 'status', 'created_date_time']

class StaffFunctionsSerializer(ModelSerializer):
    class Meta:
        model = StaffFunctions
        fields = ['id', 'name', 'description', 'function', 'staff', 'status', 'created_date_time']

class StaffCommentSerializer(ModelSerializer):
    class Meta:
        model = StaffComment
        fields = ['id', 'name', 'description', 'staff', 'status', 'created_date_time']

class PositionSerializer(ModelSerializer):
    class Meta:
        model = Position
        fields = ['id', 'name', 'description', 'department', 'requirements', 'salary_min', 'salary_max', 'employment_type', 'location', 'reporting_to', 'filled_by', 'opened_date', 'position_status', 'status', 'created_date_time']

class CandidateSerializer(ModelSerializer):
    class Meta:
        model = Candidate
        fields = ['id', 'name', 'description', 'firstname', 'lastname', 'email', 'phone', 'position', 'current_stage', 'rating', 'tags', 'resume', 'last_activity', 'interview_date', 'notes', 'status', 'created_date_time']

class HiringStageSerializer(ModelSerializer):
    class Meta:
        model = HiringStage
        fields = ['id', 'name', 'description', 'candidate', 'stage', 'notes', 'feedback', 'moved_by', 'moved_at', 'status', 'created_date_time']

class LeaveSerializer(ModelSerializer):
    class Meta:
        model = Leave
        fields = ['id', 'name', 'description', 'person', 'leave_type', 'start_date', 'end_date', 'reason', 'leave_status', 'approved_by', 'approved_at', 'status', 'created_date_time']

class SurveySerializer(ModelSerializer):
    class Meta:
        model = Survey
        fields = ['id', 'name', 'description', 'survey_type', 'anonymous', 'deadline', 'recurring', 'assigned_to', 'created_by', 'status', 'created_date_time']

class SurveyQuestionSerializer(ModelSerializer):
    class Meta:
        model = SurveyQuestion
        fields = ['id', 'name', 'description', 'survey', 'question_text', 'question_type', 'options', 'order', 'required', 'status', 'created_date_time']

class SurveyResponseSerializer(ModelSerializer):
    class Meta:
        model = SurveyResponse
        fields = ['id', 'name', 'description', 'survey', 'question', 'respondent', 'answer', 'submitted_at', 'status', 'created_date_time']

class OneOnOneSerializer(ModelSerializer):
    class Meta:
        model = OneOnOne
        fields = ['id', 'name', 'description', 'title', 'manager', 'employee', 'scheduled_at', 'duration_minutes', 'agenda', 'shared_notes', 'private_notes', 'action_items', 'recurring', 'completed', 'completed_at', 'status', 'created_date_time']
