from rest_framework.serializers import ModelSerializer
from people.models import PersonStage, Person, Address, Phone, PersonLog, Expertise, ExpertiseProfile



class PersonStageSerializer(ModelSerializer):

    class Meta:
        model = PersonStage
        fields = 'id',  'name',  'description',  'step',  'x',  'status',  'created_date_time' 


class PersonSerializer(ModelSerializer):

    class Meta:
        model = Person
        fields = 'id',  'firstname',  'lastname',  'age',  'nationalId',  'status',  'created_date_time' 


class AddressSerializer(ModelSerializer):

    class Meta:
        model = Address
        fields = 'id',  'person',  'description',  'address1',  'address2',  'zip',  'city',  'country',  'status',  'created_date_time' 


class PhoneSerializer(ModelSerializer):

    class Meta:
        model = Phone
        fields = 'id',  'person',  'description',  'phoneNumber',  'status',  'created_date_time' 


class PersonLogSerializer(ModelSerializer):

    class Meta:
        model = PersonLog
        fields = 'id',  'description',  'stage',  'person',  'status',  'created_date_time' 


class ExpertiseSerializer(ModelSerializer):

    class Meta:
        model = Expertise
        fields = 'id',  'name',  'description',  'parentId',  'status',  'created_date_time' 


class ExpertiseProfileSerializer(ModelSerializer):

    class Meta:
        model = ExpertiseProfile
        fields = 'id',  'name',  'description',  'person',  'expertise',  'status',  'created_date_time' 
