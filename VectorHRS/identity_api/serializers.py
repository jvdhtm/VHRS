from rest_framework.serializers import ModelSerializer
from identity_api.models import User, App, Role



class UserSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = 'id',  'email',  'passcode',  'first_name',  'last_name',  'is_active' 


class AppSerializer(ModelSerializer):

    class Meta:
        model = App
        fields = 'id',  'title',  'pathUrl' 


class RoleSerializer(ModelSerializer):

    class Meta:
        model = Role
        fields = 'id',  'title',  'user',  'permission',  'app' 
