from rest_framework.serializers import ModelSerializer
from staff_api.models import PersonStage, StaffStage, Person, PersonLog, Expertise, ExpertiseProfile, Condition, Department, Staff, StaffLog, Function, StaffFunctions, Address, Phone, Comments



class PersonStageSerializer(ModelSerializer):

    class Meta:
        model = PersonStage
        fields = 'id',  'name',  'description',  'step',  'x',  'status',  'created_date_time' 


class StaffStageSerializer(ModelSerializer):

    class Meta:
        model = StaffStage
        fields = 'id',  'name',  'description',  'step',  'x',  'status',  'created_date_time' 


class PersonSerializer(ModelSerializer):

    class Meta:
        model = Person
        fields = 'id',  'firstname',  'lastname',  'age',  'nationalId',  'status',  'created_date_time' 


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


class ConditionSerializer(ModelSerializer):

    class Meta:
        model = Condition
        fields = 'id',  'severity',  'status',  'created_date_time' 


class DepartmentSerializer(ModelSerializer):

    class Meta:
        model = Department
        fields = 'id',  'description',  'shape',  'status',  'created_date_time' 


class StaffSerializer(ModelSerializer):

    class Meta:
        model = Staff
        fields = 'id',  'department',  'condition',  'title',  'bossId',  'who',  'x',  'y',  'level' 


class StaffLogSerializer(ModelSerializer):

    class Meta:
        model = StaffLog
        fields = 'id',  'description',  'stage',  'with_person',  'status',  'created_date_time' 


class FunctionSerializer(ModelSerializer):

    class Meta:
        model = Function
        fields = 'id',  'name',  'description',  'shape',  'status',  'created_date_time' 


class StaffFunctionsSerializer(ModelSerializer):

    class Meta:
        model = StaffFunctions
        fields = 'id',  'function',  'staff',  'status',  'created_date_time' 


class AddressSerializer(ModelSerializer):

    class Meta:
        model = Address
        fields = 'id',  'staff',  'description',  'address1',  'address2',  'zip',  'city',  'country',  'status',  'created_date_time' 


class PhoneSerializer(ModelSerializer):

    class Meta:
        model = Phone
        fields = 'id',  'staff',  'description',  'phoneNumber',  'status',  'created_date_time' 


class CommentsSerializer(ModelSerializer):

    class Meta:
        model = Comments
        fields = 'id',  'staff',  'name',  'description',  'status',  'created_date_time' 
