from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins
from staff_api.serializers import PersonStageSerializer, StaffStageSerializer, PersonSerializer, PersonLogSerializer, ExpertiseSerializer, ExpertiseProfileSerializer, ConditionSerializer, DepartmentSerializer, StaffSerializer, StaffLogSerializer, FunctionSerializer, StaffFunctionsSerializer, AddressSerializer, PhoneSerializer, CommentsSerializer
from staff_api.models import PersonStage, StaffStage, Person, PersonLog, Expertise, ExpertiseProfile, Condition, Department, Staff, StaffLog, Function, StaffFunctions, Address, Phone, Comments


class CreateListMixin:

    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get('data', {}), list):
            kwargs['many'] = True

        return super().get_serializer(*args, **kwargs)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response({"result": serializer.data, "errors": serializer.errors_list},
                        status=status.HTTP_202_ACCEPTED, headers=headers)


class PersonStageViewSet(CreateListMixin, ModelViewSet):
    queryset = PersonStage.objects.order_by('pk')
    serializer_class = PersonStageSerializer


class StaffStageViewSet(CreateListMixin, ModelViewSet):
    queryset = StaffStage.objects.order_by('pk')
    serializer_class = StaffStageSerializer


class PersonViewSet(CreateListMixin, ModelViewSet):
    queryset = Person.objects.order_by('pk')
    serializer_class = PersonSerializer


class PersonLogViewSet(CreateListMixin, ModelViewSet):
    queryset = PersonLog.objects.order_by('pk')
    serializer_class = PersonLogSerializer


class ExpertiseViewSet(CreateListMixin, ModelViewSet):
    queryset = Expertise.objects.order_by('pk')
    serializer_class = ExpertiseSerializer


class ExpertiseProfileViewSet(CreateListMixin, ModelViewSet):
    queryset = ExpertiseProfile.objects.order_by('pk')
    serializer_class = ExpertiseProfileSerializer


class ConditionViewSet(CreateListMixin, ModelViewSet):
    queryset = Condition.objects.order_by('pk')
    serializer_class = ConditionSerializer


class DepartmentViewSet(CreateListMixin, ModelViewSet):
    queryset = Department.objects.order_by('pk')
    serializer_class = DepartmentSerializer


class StaffViewSet(CreateListMixin, ModelViewSet):
    queryset = Staff.objects.order_by('pk')
    serializer_class = StaffSerializer


class StaffLogViewSet(CreateListMixin, ModelViewSet):
    queryset = StaffLog.objects.order_by('pk')
    serializer_class = StaffLogSerializer


class FunctionViewSet(CreateListMixin, ModelViewSet):
    queryset = Function.objects.order_by('pk')
    serializer_class = FunctionSerializer


class StaffFunctionsViewSet(CreateListMixin, ModelViewSet):
    queryset = StaffFunctions.objects.order_by('pk')
    serializer_class = StaffFunctionsSerializer


class AddressViewSet(CreateListMixin, ModelViewSet):
    queryset = Address.objects.order_by('pk')
    serializer_class = AddressSerializer


class PhoneViewSet(CreateListMixin, ModelViewSet):
    queryset = Phone.objects.order_by('pk')
    serializer_class = PhoneSerializer


class CommentsViewSet(CreateListMixin, ModelViewSet):
    queryset = Comments.objects.order_by('pk')
    serializer_class = CommentsSerializer
