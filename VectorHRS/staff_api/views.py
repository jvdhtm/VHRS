from base.views import BaseViewSet, CreateListMixin
from staff_api.serializers import (
    StaffStageSerializer, ConditionSerializer, DepartmentSerializer, StaffSerializer, 
    StaffLogSerializer, FunctionSerializer, StaffFunctionsSerializer, StaffCommentSerializer,
    PositionSerializer, CandidateSerializer, HiringStageSerializer, LeaveSerializer,
    SurveySerializer, SurveyQuestionSerializer, SurveyResponseSerializer, OneOnOneSerializer
)
from staff_api.models import (
    StaffStage, Condition, Department, Staff, StaffLog, Function, StaffFunctions, StaffComment,
    Position, Candidate, HiringStage, Leave, Survey, SurveyQuestion, SurveyResponse, OneOnOne
)


class StaffStageViewSet(CreateListMixin, BaseViewSet):
    queryset = StaffStage.objects.order_by('pk')
    serializer_class = StaffStageSerializer


class ConditionViewSet(CreateListMixin, BaseViewSet):
    queryset = Condition.objects.order_by('pk')
    serializer_class = ConditionSerializer


class DepartmentViewSet(CreateListMixin, BaseViewSet):
    queryset = Department.objects.order_by('pk')
    serializer_class = DepartmentSerializer


class StaffViewSet(CreateListMixin, BaseViewSet):
    queryset = Staff.objects.order_by('pk')
    serializer_class = StaffSerializer


class StaffLogViewSet(CreateListMixin, BaseViewSet):
    queryset = StaffLog.objects.order_by('pk')
    serializer_class = StaffLogSerializer


class FunctionViewSet(CreateListMixin, BaseViewSet):
    queryset = Function.objects.order_by('pk')
    serializer_class = FunctionSerializer


class StaffFunctionsViewSet(CreateListMixin, BaseViewSet):
    queryset = StaffFunctions.objects.order_by('pk')
    serializer_class = StaffFunctionsSerializer


class StaffCommentViewSet(CreateListMixin, BaseViewSet):
    queryset = StaffComment.objects.order_by('pk')
    serializer_class = StaffCommentSerializer


# ==================== HIRING & RECRUITMENT VIEWSETS ====================

class PositionViewSet(CreateListMixin, BaseViewSet):
    queryset = Position.objects.order_by('pk')
    serializer_class = PositionSerializer


class CandidateViewSet(CreateListMixin, BaseViewSet):
    queryset = Candidate.objects.order_by('pk')
    serializer_class = CandidateSerializer


class HiringStageViewSet(CreateListMixin, BaseViewSet):
    queryset = HiringStage.objects.order_by('pk')
    serializer_class = HiringStageSerializer


# ==================== LEAVE & CALENDAR VIEWSETS ====================

class LeaveViewSet(CreateListMixin, BaseViewSet):
    queryset = Leave.objects.order_by('pk')
    serializer_class = LeaveSerializer


# ==================== SURVEY VIEWSETS ====================

class SurveyViewSet(CreateListMixin, BaseViewSet):
    queryset = Survey.objects.order_by('pk')
    serializer_class = SurveySerializer


class SurveyQuestionViewSet(CreateListMixin, BaseViewSet):
    queryset = SurveyQuestion.objects.order_by('pk')
    serializer_class = SurveyQuestionSerializer


class SurveyResponseViewSet(CreateListMixin, BaseViewSet):
    queryset = SurveyResponse.objects.order_by('pk')
    serializer_class = SurveyResponseSerializer


# ==================== 1-ON-1 MEETING VIEWSETS ====================

class OneOnOneViewSet(CreateListMixin, BaseViewSet):
    queryset = OneOnOne.objects.order_by('pk')
    serializer_class = OneOnOneSerializer
