from rest_framework.serializers import ModelSerializer
from staff_api.models import StaffStage, Condition, Department, Staff, StaffLog, Function, StaffFunctions, Comments



class StaffStageSerializer(ModelSerializer):

    class Meta:
        model = StaffStage
        fields = 'id',  'name',  'description',  'step',  'x',  'status',  'created_date_time' 


class ConditionSerializer(ModelSerializer):

    class Meta:
        model = Condition
        fields = 'id',  'severity',  'status',  'created_date_time' 


class DepartmentSerializer(ModelSerializer):

    class Meta:
        model = Department
        fields = 'id',  'name',  'parentId',  'description',  'shape',  'status',  'created_date_time' 


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


class CommentsSerializer(ModelSerializer):

    class Meta:
        model = Comments
        fields = 'id',  'staff',  'name',  'description',  'status',  'created_date_time' 
