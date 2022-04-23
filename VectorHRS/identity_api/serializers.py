from rest_framework import serializers
from identity_api.models import User, App, Role


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = 'id',  'email',  'passcode',  'first_name',  'last_name',  'is_active' 


class AppSerializer(serializers.ModelSerializer):

    class Meta:
        model = App
        fields = 'id',  'title',  'pathUrl' 


class RoleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Role
        fields = 'id',  'title',  'user',  'permission',  'app' 
