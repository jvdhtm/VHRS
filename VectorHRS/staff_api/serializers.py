from rest_framework.serializers import ModelSerializer
from staff_api.models import PersonStage, StaffStage, Person, PersonLog, Expertise, ExpertiseProfile, Condition, Department, Staff, StaffLog, Function, StaffFunctions, Address, Phone, Comments



class ErrorsListSerializerMixin:
    error_list = []

    def to_internal_value(self, data):

        if not isinstance(data, list):
            message = self.error_messages['not_a_list'].format(
                input_type=type(data).__name__
            )
            raise ValidationError({
                api_settings.NON_FIELD_ERRORS_KEY: [message]
            }, code='not_a_list')
        if not self.allow_empty and len(data) == 0:
            message = self.error_messages['empty']
            raise ValidationError({
                api_settings.NON_FIELD_ERRORS_KEY: [message]
            }, code='empty')

        ret = []
        errors = []

        for item in data:
            try:
                validated = self.child.run_validation(item)
            except ValidationError as exc:
                errors.append({"error": exc.detail, "data": item})
            else:
                ret.append(validated)

        if any(errors):
            self.errors_list = errors
            # raise ValidationError(errors)
        return ret


class PersonStageSerializer(ErrorsListSerializerMixin,ModelSerializer):

    class Meta:
        model = PersonStage
        fields = 'id',  'name',  'description',  'step',  'x',  'status',  'created_date_time' 


class StaffStageSerializer(ErrorsListSerializerMixin,ModelSerializer):

    class Meta:
        model = StaffStage
        fields = 'id',  'name',  'description',  'step',  'x',  'status',  'created_date_time' 


class PersonSerializer(ErrorsListSerializerMixin,ModelSerializer):

    class Meta:
        model = Person
        fields = 'id',  'firstname',  'lastname',  'age',  'nationalId',  'status',  'created_date_time' 


class PersonLogSerializer(ErrorsListSerializerMixin,ModelSerializer):

    class Meta:
        model = PersonLog
        fields = 'id',  'description',  'stage',  'person',  'status',  'created_date_time' 


class ExpertiseSerializer(ErrorsListSerializerMixin,ModelSerializer):

    class Meta:
        model = Expertise
        fields = 'id',  'name',  'description',  'parentId',  'status',  'created_date_time' 


class ExpertiseProfileSerializer(ErrorsListSerializerMixin,ModelSerializer):

    class Meta:
        model = ExpertiseProfile
        fields = 'id',  'name',  'description',  'person',  'expertise',  'status',  'created_date_time' 


class ConditionSerializer(ErrorsListSerializerMixin,ModelSerializer):

    class Meta:
        model = Condition
        fields = 'id',  'severity',  'status',  'created_date_time' 


class DepartmentSerializer(ErrorsListSerializerMixin,ModelSerializer):

    class Meta:
        model = Department
        fields = 'id',  'description',  'shape',  'status',  'created_date_time' 


class StaffSerializer(ErrorsListSerializerMixin,ModelSerializer):

    class Meta:
        model = Staff
        fields = 'id',  'department',  'condition',  'title',  'bossId',  'who',  'x',  'y',  'level' 


class StaffLogSerializer(ErrorsListSerializerMixin,ModelSerializer):

    class Meta:
        model = StaffLog
        fields = 'id',  'description',  'stage',  'with_person',  'status',  'created_date_time' 


class FunctionSerializer(ErrorsListSerializerMixin,ModelSerializer):

    class Meta:
        model = Function
        fields = 'id',  'name',  'description',  'shape',  'status',  'created_date_time' 


class StaffFunctionsSerializer(ErrorsListSerializerMixin,ModelSerializer):

    class Meta:
        model = StaffFunctions
        fields = 'id',  'function',  'staff',  'status',  'created_date_time' 


class AddressSerializer(ErrorsListSerializerMixin,ModelSerializer):

    class Meta:
        model = Address
        fields = 'id',  'staff',  'description',  'address1',  'address2',  'zip',  'city',  'country',  'status',  'created_date_time' 


class PhoneSerializer(ErrorsListSerializerMixin,ModelSerializer):

    class Meta:
        model = Phone
        fields = 'id',  'staff',  'description',  'phoneNumber',  'status',  'created_date_time' 


class CommentsSerializer(ErrorsListSerializerMixin,ModelSerializer):

    class Meta:
        model = Comments
        fields = 'id',  'staff',  'name',  'description',  'status',  'created_date_time' 
