from base.views import BaseViewSet, CreateListMixin
from identity_api.serializers import LoginSerializer, UserSerializer, AppSerializer, RoleSerializer
from identity_api.models import User, App, Role
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status


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


class LoginViewSet(CreateListMixin, BaseViewSet):
    @action(methods=['post'], detail=False)
    def login(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            # Here, you would typically create and return a token
            return Response({'message': 'Login successful', 'user_id': user.id})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
