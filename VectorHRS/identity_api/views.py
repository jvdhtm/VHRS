from base.views import BaseViewSet, CreateListMixin
from identity_api.serializers import  UserSerializer, AppSerializer, RoleSerializer
from identity_api.models import User, App, Role
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status
from rest_framework.viewsets import ViewSet

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

class UserViewSet(CreateListMixin, BaseViewSet):
    queryset = User.objects.order_by('pk')
    serializer_class = UserSerializer
    filter_fields = ["id",  "email",  "password",  "first_name",  "last_name",  "is_active" ]


class AppViewSet(CreateListMixin, BaseViewSet):
    queryset = App.objects.order_by('pk')
    serializer_class = AppSerializer
    filter_fields = ["id",  "title",  "pathUrl" ]


class RoleViewSet(CreateListMixin, BaseViewSet):
    queryset = Role.objects.order_by('pk')
    serializer_class = RoleSerializer
    filter_fields = ["id",  "title",  "user",  "permission",  "app" ]


class LoginViewSet(ViewSet):
    serializer_class = UserSerializer
    filter_fields = ["id",  "email",  "password",  "is_active" ]
    @swagger_auto_schema(
        method='post',
        request_body=UserSerializer,
        responses={201: openapi.Response('Login successful', UserSerializer)}
    )
    @action(methods=['post'], detail=False)
    @action(methods=['post'], detail=False)
    def login(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            return  Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
