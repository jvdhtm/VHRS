from base.views import BaseViewSet, CreateListMixin
from identity_api.serializers import UserSerializer, AppSerializer, RoleSerializer
from identity_api.models import User, App, Role



class UserViewSet(CreateListMixin, BaseViewSet):
    queryset = User.objects.order_by('pk')
    serializer_class = UserSerializer
    filter_fields = ["id",  "email",  "passcode",  "first_name",  "last_name",  "is_active" ]


class AppViewSet(CreateListMixin, BaseViewSet):
    queryset = App.objects.order_by('pk')
    serializer_class = AppSerializer
    filter_fields = ["id",  "title",  "pathUrl" ]


class RoleViewSet(CreateListMixin, BaseViewSet):
    queryset = Role.objects.order_by('pk')
    serializer_class = RoleSerializer
    filter_fields = ["id",  "title",  "user",  "permission",  "app" ]
