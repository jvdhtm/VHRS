from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins
from people.serializers import PersonStageSerializer, PersonSerializer, AddressSerializer, PhoneSerializer, PersonLogSerializer, ExpertiseSerializer, ExpertiseProfileSerializer
from people.models import PersonStage, Person, Address, Phone, PersonLog, Expertise, ExpertiseProfile
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


class PersonViewSet(CreateListMixin, ModelViewSet):
    queryset = Person.objects.order_by('pk')
    serializer_class = PersonSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "firstname",  "lastname",  "age",  "nationalId",  "status",  "created_date_time" ]


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
