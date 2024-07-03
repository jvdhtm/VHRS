from rest_framework import serializers
from identity_api.models import User, App, Role


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = 'id',  'email',  'password',  'first_name',  'last_name',  'is_active' 


class AppSerializer(serializers.ModelSerializer):

    class Meta:
        model = App
        fields = 'id',  'title',  'pathUrl' 


class RoleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Role
        fields = 'id',  'title',  'user',  'permission',  'app' 


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')
        if email and password:
            user = authenticate(username=email, password=password)
            if user:
                if not user.is_active:
                    raise serializers.ValidationError("User account is disabled.")
                data['user'] = user
            else:
                raise serializers.ValidationError("Unable to log in with provided credentials.")
        else:
            raise serializers.ValidationError("Must include both email and password.")
        return data