from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins
from staff_api.serializers import PersonStageSerializer, StaffStageSerializer, PersonSerializer, PersonLogSerializer, ExpertiseSerializer, ExpertiseProfileSerializer, ConditionSerializer, DepartmentSerializer, StaffSerializer, StaffLogSerializer, FunctionSerializer, StaffFunctionsSerializer, AddressSerializer, PhoneSerializer, CommentsSerializer
from staff_api.models import PersonStage, StaffStage, Person, PersonLog, Expertise, ExpertiseProfile, Condition, Department, Staff, StaffLog, Function, StaffFunctions, Address, Phone, Comments


class BulkCreateModelMixin(mixins.CreateModelMixin):

    def create(self, request, *args, **kwargs):
        # The initial serializer
        serializer = self.get_serializer(data=request.DATA)
        return_list = []

        for item in zip(serializer.errors, serializer.init_data):
            # If item doesn't have errors
            if not item[0]:

                # Create a an individual serializer for the valid object and save it
                object_serializer = self.get_serializer(data=[item[1]])
                if object_serializer.is_valid():
                    self.pre_save(object_serializer.object)
                    self.object = object_serializer.save(force_insert=True)
                    self.post_save(self.object, created=True)

                    return_list.append(object_serializer.data[0])
            else:
                return_list.append(item[0])

        # Status code
        if serializer.errors:
            return_status = status.HTTP_206_PARTIAL_CONTENT
        else:
            return_status = status.HTTP_201_CREATED

        return Response(return_list, status=return_status)



class PersonStageViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = PersonStage.objects.order_by('pk')
    serializer_class = PersonStageSerializer


class StaffStageViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = StaffStage.objects.order_by('pk')
    serializer_class = StaffStageSerializer


class PersonViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = Person.objects.order_by('pk')
    serializer_class = PersonSerializer


class PersonLogViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = PersonLog.objects.order_by('pk')
    serializer_class = PersonLogSerializer


class ExpertiseViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = Expertise.objects.order_by('pk')
    serializer_class = ExpertiseSerializer


class ExpertiseProfileViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = ExpertiseProfile.objects.order_by('pk')
    serializer_class = ExpertiseProfileSerializer


class ConditionViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = Condition.objects.order_by('pk')
    serializer_class = ConditionSerializer


class DepartmentViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = Department.objects.order_by('pk')
    serializer_class = DepartmentSerializer


class StaffViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = Staff.objects.order_by('pk')
    serializer_class = StaffSerializer


class StaffLogViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = StaffLog.objects.order_by('pk')
    serializer_class = StaffLogSerializer


class FunctionViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = Function.objects.order_by('pk')
    serializer_class = FunctionSerializer


class StaffFunctionsViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = StaffFunctions.objects.order_by('pk')
    serializer_class = StaffFunctionsSerializer


class AddressViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = Address.objects.order_by('pk')
    serializer_class = AddressSerializer


class PhoneViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = Phone.objects.order_by('pk')
    serializer_class = PhoneSerializer


class CommentsViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = Comments.objects.order_by('pk')
    serializer_class = CommentsSerializer
