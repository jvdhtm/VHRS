from rest_framework import serializers
from identity_api.models import User, App, Role, Login

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

class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(write_only=True)
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Login
        fields = ('id', 'email', 'password', 'timestamp')
        read_only_fields = ('id', 'timestamp')

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
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    app = serializers.PrimaryKeyRelatedField(queryset=App.objects.all())

    class Meta:
        model = Role
        fields = ('id', 'title', 'user', 'permission', 'app')
        read_only_fields = ('id',)

    def validate(self, data):
        # Ensure that user and app combinations are unique
        user = data.get('user')
        app = data.get('app')
        
        if user and app:
            existing_roles = Role.objects.filter(user=user, app=app)
            if self.instance:
                existing_roles = existing_roles.exclude(pk=self.instance.pk)
            if existing_roles.exists():
                raise serializers.ValidationError("Role for this user and app already exists.")
        
        return data