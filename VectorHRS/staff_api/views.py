from rest_framework.viewsets import ModelViewSet
from staff_api.serializers import PersonStageSerializer, StaffStageSerializer, PersonSerializer, PersonLogSerializer, ExpertiseSerializer, ExpertiseProfileSerializer, ConditionSerializer, DepartmentSerializer, StaffSerializer, StaffLogSerializer, FunctionSerializer, StaffFunctionsSerializer, AddressSerializer, PhoneSerializer, CommentsSerializer
from staff_api.models import PersonStage, StaffStage, Person, PersonLog, Expertise, ExpertiseProfile, Condition, Department, Staff, StaffLog, Function, StaffFunctions, Address, Phone, Comments


class PersonStageViewSet(ModelViewSet):
    queryset = PersonStage.objects.order_by('pk')
    serializer_class = PersonStageSerializer


class StaffStageViewSet(ModelViewSet):
    queryset = StaffStage.objects.order_by('pk')
    serializer_class = StaffStageSerializer


class PersonViewSet(ModelViewSet):
    queryset = Person.objects.order_by('pk')
    serializer_class = PersonSerializer


class PersonLogViewSet(ModelViewSet):
    queryset = PersonLog.objects.order_by('pk')
    serializer_class = PersonLogSerializer


class ExpertiseViewSet(ModelViewSet):
    queryset = Expertise.objects.order_by('pk')
    serializer_class = ExpertiseSerializer


class ExpertiseProfileViewSet(ModelViewSet):
    queryset = ExpertiseProfile.objects.order_by('pk')
    serializer_class = ExpertiseProfileSerializer


class ConditionViewSet(ModelViewSet):
    queryset = Condition.objects.order_by('pk')
    serializer_class = ConditionSerializer


class DepartmentViewSet(ModelViewSet):
    queryset = Department.objects.order_by('pk')
    serializer_class = DepartmentSerializer


class StaffViewSet(ModelViewSet):
    queryset = Staff.objects.order_by('pk')
    serializer_class = StaffSerializer


class StaffLogViewSet(ModelViewSet):
    queryset = StaffLog.objects.order_by('pk')
    serializer_class = StaffLogSerializer


class FunctionViewSet(ModelViewSet):
    queryset = Function.objects.order_by('pk')
    serializer_class = FunctionSerializer


class StaffFunctionsViewSet(ModelViewSet):
    queryset = StaffFunctions.objects.order_by('pk')
    serializer_class = StaffFunctionsSerializer


class AddressViewSet(ModelViewSet):
    queryset = Address.objects.order_by('pk')
    serializer_class = AddressSerializer


class PhoneViewSet(ModelViewSet):
    queryset = Phone.objects.order_by('pk')
    serializer_class = PhoneSerializer


class CommentsViewSet(ModelViewSet):
    queryset = Comments.objects.order_by('pk')
    serializer_class = CommentsSerializer
