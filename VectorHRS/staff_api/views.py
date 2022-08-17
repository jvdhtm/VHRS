from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins
from staff_api.serializers import StaffStageSerializer, ConditionSerializer, DepartmentSerializer, StaffSerializer, StaffLogSerializer, FunctionSerializer, StaffFunctionsSerializer, CommentsSerializer
from staff_api.models import StaffStage, Condition, Department, Staff, StaffLog, Function, StaffFunctions, Comments
from rest_framework.permissions import IsAuthenticated

class CreateListMixin:
    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get('data', {}), list):
            kwargs['many'] = True

        return super().get_serializer(*args, **kwargs)


class StaffStageViewSet(CreateListMixin, ModelViewSet):
    queryset = StaffStage.objects.order_by('pk')
    serializer_class = StaffStageSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "name",  "description",  "step",  "x",  "status",  "created_date_time" ]


class ConditionViewSet(CreateListMixin, ModelViewSet):
    queryset = Condition.objects.order_by('pk')
    serializer_class = ConditionSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "severity",  "status",  "created_date_time" ]


class DepartmentViewSet(CreateListMixin, ModelViewSet):
    queryset = Department.objects.order_by('pk')
    serializer_class = DepartmentSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "name",  "parentId",  "description",  "shape",  "status",  "created_date_time" ]


class StaffViewSet(CreateListMixin, ModelViewSet):
    queryset = Staff.objects.order_by('pk')
    serializer_class = StaffSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "department",  "condition",  "title",  "bossId",  "who",  "x",  "y",  "level" ]


class StaffLogViewSet(CreateListMixin, ModelViewSet):
    queryset = StaffLog.objects.order_by('pk')
    serializer_class = StaffLogSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "description",  "stage",  "with_person",  "status",  "created_date_time" ]


class FunctionViewSet(CreateListMixin, ModelViewSet):
    queryset = Function.objects.order_by('pk')
    serializer_class = FunctionSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "name",  "description",  "shape",  "status",  "created_date_time" ]


class StaffFunctionsViewSet(CreateListMixin, ModelViewSet):
    queryset = StaffFunctions.objects.order_by('pk')
    serializer_class = StaffFunctionsSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "function",  "staff",  "status",  "created_date_time" ]


class CommentsViewSet(CreateListMixin, ModelViewSet):
    queryset = Comments.objects.order_by('pk')
    serializer_class = CommentsSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "staff",  "name",  "description",  "status",  "created_date_time" ]
