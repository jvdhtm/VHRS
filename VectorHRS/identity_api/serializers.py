from rest_framework import serializers
from identity_api.models import User, App, Role

def custom_authenticate(email, password):
    try:
        user = User.objects.get(email=email)
        if user.check_password(password) and user.is_active:
            return user
    except User.DoesNotExist:
        return None
    return None

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'first_name', 'last_name', 'is_active')
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')
        if email and password:
            user = custom_authenticate(email=email, password=password)
            if user:
                data['user'] = user
            else:
                raise serializers.ValidationError("Invalid email or password")
        else:
            raise serializers.ValidationError("Must include 'email' and 'password'")
        return data


class AppSerializer(serializers.ModelSerializer):

    class Meta:
        model = App
        fields = 'id',  'title',  'pathUrl' 


class RoleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Role
        fields = 'id',  'title',  'user',  'permission',  'app' 
