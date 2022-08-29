from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins
from staff_api.serializers import StaffStageSerializer, ConditionSerializer, DepartmentSerializer, StaffSerializer, StaffLogSerializer, FunctionSerializer, StaffFunctionsSerializer, StaffCommentSerializer
from staff_api.models import StaffStage, Condition, Department, Staff, StaffLog, Function, StaffFunctions, StaffComment
from rest_framework.permissions import IsAuthenticated
from django_filters import rest_framework as filters

class CreateListMixin:
    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get('data', {}), list):
            kwargs['many'] = True

        return super().get_serializer(*args, **kwargs)


class StaffStageViewSet(CreateListMixin, ModelViewSet):
    queryset = StaffStage.objects.order_by('pk')
    serializer_class = StaffStageSerializer
    permission_classes = [IsAuthenticated,]


class ConditionViewSet(CreateListMixin, ModelViewSet):
    queryset = Condition.objects.order_by('pk')
    serializer_class = ConditionSerializer
    permission_classes = [IsAuthenticated,]


class DepartmentViewSet(CreateListMixin, ModelViewSet):
    queryset = Department.objects.order_by('pk')
    serializer_class = DepartmentSerializer
    permission_classes = [IsAuthenticated,]


class StaffViewSet(CreateListMixin, ModelViewSet):
    queryset = Staff.objects.order_by('pk')
    serializer_class = StaffSerializer
    permission_classes = [IsAuthenticated,]


class StaffLogViewSet(CreateListMixin, ModelViewSet):
    queryset = StaffLog.objects.order_by('pk')
    serializer_class = StaffLogSerializer
    permission_classes = [IsAuthenticated,]


class FunctionViewSet(CreateListMixin, ModelViewSet):
    queryset = Function.objects.order_by('pk')
    serializer_class = FunctionSerializer
    permission_classes = [IsAuthenticated,]


class StaffFunctionsViewSet(CreateListMixin, ModelViewSet):
    queryset = StaffFunctions.objects.order_by('pk')
    serializer_class = StaffFunctionsSerializer
    permission_classes = [IsAuthenticated,]


class StaffCommentViewSet(CreateListMixin, ModelViewSet):
    queryset = StaffComment.objects.order_by('pk')
    serializer_class = StaffCommentSerializer
    permission_classes = [IsAuthenticated,]
