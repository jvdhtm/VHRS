from rest_framework.viewsets import ModelViewSet
from identity_api.serializers import UserSerializer, AppSerializer, RoleSerializer
from identity_api.models import User, App, Role


class UserViewSet(ModelViewSet):
    queryset = User.objects.order_by('pk')
    serializer_class = UserSerializer


class AppViewSet(ModelViewSet):
    queryset = App.objects.order_by('pk')
    serializer_class = AppSerializer


class RoleViewSet(ModelViewSet):
    queryset = Role.objects.order_by('pk')
    serializer_class = RoleSerializer
