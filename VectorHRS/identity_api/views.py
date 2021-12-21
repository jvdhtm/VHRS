from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins
from identity_api.serializers import UserSerializer, AppSerializer, RoleSerializer
from identity_api.models import User, App, Role
from rest_framework.permissions import IsAuthenticated

class CreateListMixin:
    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get('data', {}), list):
            kwargs['many'] = True

        return super().get_serializer(*args, **kwargs)


class UserViewSet(CreateListMixin, ModelViewSet):
    queryset = User.objects.order_by('pk')
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "email",  "passcode",  "first_name",  "last_name",  "is_active" ]


class AppViewSet(CreateListMixin, ModelViewSet):
    queryset = App.objects.order_by('pk')
    serializer_class = AppSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "title",  "pathUrl" ]


class RoleViewSet(CreateListMixin, ModelViewSet):
    queryset = Role.objects.order_by('pk')
    serializer_class = RoleSerializer
    permission_classes = [IsAuthenticated,]
    filter_fields = ["id",  "title",  "user",  "permission",  "app" ]
