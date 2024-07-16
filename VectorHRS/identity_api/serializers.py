from rest_framework import serializers
from django.contrib.auth.hashers import check_password
from identity_api.models import CustomUser as User, App, Role, Login, Account

def custom_authenticate(email, password):
    try:
        user = User.objects.get(email=email)
        if check_password(password, user.password) and user.is_active:
            return user
    except User.DoesNotExist:
        return None
    return None

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'first_name', 'last_name', 'is_active', 'is_staff', 'status')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            is_active=validated_data.get('is_active', True),
            is_staff=validated_data.get('is_staff', False),
            status=validated_data.get('status', 'active'),
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.is_active = validated_data.get('is_active', instance.is_active)
        instance.is_staff = validated_data.get('is_staff', instance.is_staff)
        instance.status = validated_data.get('status', instance.status)
        password = validated_data.get('password', None)
        if password:
            instance.set_password(password)
        instance.save()
        return instance

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(write_only=True)
    password = serializers.CharField(write_only=True)
    user = serializers.PrimaryKeyRelatedField(read_only=True)

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
        fields = ('id', 'title', 'pathUrl')

class RoleSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    app = serializers.PrimaryKeyRelatedField(queryset=App.objects.all())

    class Meta:
        model = Role
        fields = ('id', 'title', 'user', 'permission', 'app')
        read_only_fields = ('id',)

    def validate(self, data):
        user = data.get('user')
        app = data.get('app')

        if user and app:
            existing_roles = Role.objects.filter(user=user, app=app)
            if self.instance:
                existing_roles = existing_roles.exclude(pk=self.instance.pk)
            if existing_roles.exists():
                raise serializers.ValidationError("Role for this user and app already exists.")

        return data

class AccountSerializer(serializers.ModelSerializer):
    users = UserSerializer(many=True, read_only=True)
    user_ids = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), many=True, write_only=True)

    class Meta:
        model = Account
        fields = ('id', 'name', 'users', 'user_ids')
        read_only_fields = ('id', 'users')

    def create(self, validated_data):
        users = validated_data.pop('user_ids')
        account = Account.objects.create(**validated_data)
        account.users.set(users)
        return account

    def update(self, instance, validated_data):
        users = validated_data.pop('user_ids', None)
        instance.name = validated_data.get('name', instance.name)
        if users is not None:
            instance.users.set(users)
        instance.save()
        return instance
