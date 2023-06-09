from base.views import BaseViewSet, CreateListMixin
from staff_api.serializers import StaffStageSerializer, ConditionSerializer, DepartmentSerializer, StaffSerializer, StaffLogSerializer, FunctionSerializer, StaffFunctionsSerializer, StaffCommentSerializer
from staff_api.models import StaffStage, Condition, Department, Staff, StaffLog, Function, StaffFunctions, StaffComment


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
