from base.views import BaseViewSet, CreateListMixin
from people.serializers import PersonStageSerializer, PersonSerializer, AddressSerializer, PhoneSerializer, PersonLogSerializer, ExpertiseSerializer, ExpertiseProfileSerializer
from people.models import PersonStage, Person, Address, Phone, PersonLog, Expertise, ExpertiseProfile




class PersonStageViewSet(CreateListMixin, BaseViewSet):
    queryset = PersonStage.objects.order_by('pk')
    serializer_class = PersonStageSerializer


class PersonViewSet(CreateListMixin, BaseViewSet):
    queryset = Person.objects.order_by('pk')
    serializer_class = PersonSerializer


class AddressViewSet(CreateListMixin, BaseViewSet):
    queryset = Address.objects.order_by('pk')
    serializer_class = AddressSerializer


class PhoneViewSet(CreateListMixin, BaseViewSet):
    queryset = Phone.objects.order_by('pk')
    serializer_class = PhoneSerializer


class PersonLogViewSet(CreateListMixin, BaseViewSet):
    queryset = PersonLog.objects.order_by('pk')
    serializer_class = PersonLogSerializer


class ExpertiseViewSet(CreateListMixin, BaseViewSet):
    queryset = Expertise.objects.order_by('pk')
    serializer_class = ExpertiseSerializer


class ExpertiseProfileViewSet(CreateListMixin, BaseViewSet):
    queryset = ExpertiseProfile.objects.order_by('pk')
    serializer_class = ExpertiseProfileSerializer
