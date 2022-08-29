from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins
from people.serializers import PersonStageSerializer, PersonSerializer, AddressSerializer, PhoneSerializer, PersonLogSerializer, ExpertiseSerializer, ExpertiseProfileSerializer
from people.models import PersonStage, Person, Address, Phone, PersonLog, Expertise, ExpertiseProfile
from rest_framework.permissions import IsAuthenticated
from django_filters import rest_framework as filters

class CreateListMixin:
    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get('data', {}), list):
            kwargs['many'] = True

        return super().get_serializer(*args, **kwargs)


class PersonStageViewSet(CreateListMixin, ModelViewSet):
    queryset = PersonStage.objects.order_by('pk')
    serializer_class = PersonStageSerializer
    permission_classes = [IsAuthenticated,]


class PersonViewSet(CreateListMixin, ModelViewSet):
    queryset = Person.objects.order_by('pk')
    serializer_class = PersonSerializer
    permission_classes = [IsAuthenticated,]


class AddressViewSet(CreateListMixin, ModelViewSet):
    queryset = Address.objects.order_by('pk')
    serializer_class = AddressSerializer
    permission_classes = [IsAuthenticated,]


class PhoneViewSet(CreateListMixin, ModelViewSet):
    queryset = Phone.objects.order_by('pk')
    serializer_class = PhoneSerializer
    permission_classes = [IsAuthenticated,]


class PersonLogViewSet(CreateListMixin, ModelViewSet):
    queryset = PersonLog.objects.order_by('pk')
    serializer_class = PersonLogSerializer
    permission_classes = [IsAuthenticated,]


class ExpertiseViewSet(CreateListMixin, ModelViewSet):
    queryset = Expertise.objects.order_by('pk')
    serializer_class = ExpertiseSerializer
    permission_classes = [IsAuthenticated,]


class ExpertiseProfileViewSet(CreateListMixin, ModelViewSet):
    queryset = ExpertiseProfile.objects.order_by('pk')
    serializer_class = ExpertiseProfileSerializer
    permission_classes = [IsAuthenticated,]
