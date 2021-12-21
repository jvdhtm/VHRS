from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins
from staff_api.serializers import PersonStageSerializer, StaffStageSerializer, PersonSerializer, PersonLogSerializer, ExpertiseSerializer, ExpertiseProfileSerializer, ConditionSerializer, DepartmentSerializer, StaffSerializer, StaffLogSerializer, FunctionSerializer, StaffFunctionsSerializer, AddressSerializer, PhoneSerializer, CommentsSerializer
from staff_api.models import PersonStage, StaffStage, Person, PersonLog, Expertise, ExpertiseProfile, Condition, Department, Staff, StaffLog, Function, StaffFunctions, Address, Phone, Comments
from rest_framework.permissions import IsAuthenticated

class CreateListMixin:
    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get('data', {}), list):
            kwargs['many'] = True

        return super().get_serializer(*args, **kwargs)


class PersonStageViewSet(CreateListMixin, ModelViewSet):
    queryset = PersonStage.objects.order_by('pk')
    serializer_class = PersonStageSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "name",  "description",  "step",  "x",  "status",  "created_date_time" ]


class StaffStageViewSet(CreateListMixin, ModelViewSet):
    queryset = StaffStage.objects.order_by('pk')
    serializer_class = StaffStageSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "name",  "description",  "step",  "x",  "status",  "created_date_time" ]


class PersonViewSet(CreateListMixin, ModelViewSet):
    queryset = Person.objects.order_by('pk')
    serializer_class = PersonSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "firstname",  "lastname",  "age",  "nationalId",  "status",  "created_date_time" ]


class PersonLogViewSet(CreateListMixin, ModelViewSet):
    queryset = PersonLog.objects.order_by('pk')
    serializer_class = PersonLogSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "description",  "stage",  "person",  "status",  "created_date_time" ]


class ExpertiseViewSet(CreateListMixin, ModelViewSet):
    queryset = Expertise.objects.order_by('pk')
    serializer_class = ExpertiseSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "name",  "description",  "parentId",  "status",  "created_date_time" ]


class ExpertiseProfileViewSet(CreateListMixin, ModelViewSet):
    queryset = ExpertiseProfile.objects.order_by('pk')
    serializer_class = ExpertiseProfileSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "name",  "description",  "person",  "expertise",  "status",  "created_date_time" ]


class ConditionViewSet(CreateListMixin, ModelViewSet):
    queryset = Condition.objects.order_by('pk')
    serializer_class = ConditionSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "severity",  "status",  "created_date_time" ]


class DepartmentViewSet(CreateListMixin, ModelViewSet):
    queryset = Department.objects.order_by('pk')
    serializer_class = DepartmentSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "description",  "shape",  "status",  "created_date_time" ]


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


class AddressViewSet(CreateListMixin, ModelViewSet):
    queryset = Address.objects.order_by('pk')
    serializer_class = AddressSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "staff",  "description",  "address1",  "address2",  "zip",  "city",  "country",  "status",  "created_date_time" ]


class PhoneViewSet(CreateListMixin, ModelViewSet):
    queryset = Phone.objects.order_by('pk')
    serializer_class = PhoneSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "staff",  "description",  "phoneNumber",  "status",  "created_date_time" ]


class CommentsViewSet(CreateListMixin, ModelViewSet):
    queryset = Comments.objects.order_by('pk')
    serializer_class = CommentsSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "staff",  "name",  "description",  "status",  "created_date_time" ]
