from base.views import BaseViewSet, BaseViewSetNoSerializer, CreateListMixin, BaseViewSetNoPermission
from rest_framework import serializers, status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.viewsets import  ViewSet
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import login as django_login, logout as django_logout
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
import logging
from identity_api.models import CustomUser as User, App, Role, Login, Account
from identity_api.serializers import UserSerializer, AppSerializer, RoleSerializer, LoginSerializer, AccountSerializer

logger = logging.getLogger(__name__)

class UserViewSet(CreateListMixin, BaseViewSet):
    queryset = User.objects.order_by('pk')
    serializer_class = UserSerializer
    filter_fields = ["id", "email", "first_name", "last_name", "is_active", "is_staff"]

class AppViewSet(CreateListMixin, BaseViewSet):
    queryset = App.objects.order_by('pk')
    serializer_class = AppSerializer
    filter_fields = ["id", "title", "pathUrl"]

class RoleViewSet(CreateListMixin, BaseViewSet):
    queryset = Role.objects.order_by('pk')
    serializer_class = RoleSerializer
    filter_fields = ["id", "title", "user", "permission", "app"]

class AccountViewSet(CreateListMixin, BaseViewSet):
    queryset = Account.objects.order_by('pk')
    serializer_class = AccountSerializer
    filter_fields = ["id", "name"]

class LoginViewSet(ViewSet):
    serializer_class = LoginSerializer
    filter_fields = ["id", "email", "password", "is_active"]
    
    @swagger_auto_schema(
        method='post',
        request_body=LoginSerializer,
        responses={
            201: openapi.Response(
                description="Login successful",
                schema=openapi.Schema(
                    type=openapi.TYPE_OBJECT,
                    properties={
                        'message': openapi.Schema(type=openapi.TYPE_STRING, description='Response message'),
                        'token': openapi.Schema(type=openapi.TYPE_STRING, description='Authentication token'),
                        'user': {
                            '$ref': '#/definitions/User'
                        }
                    }
                )
            )
        },
        tags=['auth'],
        operation_id='auth_login',
        operation_description='User login endpoint'
    )
    @action(methods=['post'], detail=False)
    def login(self, request, *args, **kwargs):
        logger.debug("Login request received with data: %s", request.data)
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            logger.debug("User validated: %s", user)
            
            # Get the correct auth_user instance
            auth_user_instance = user
            try:
                token, created = Token.objects.get_or_create(user=auth_user_instance)  # Ensure user is a User instance
                logger.debug("Token created: %s", token.key)
            except Exception as e:
                logger.error("Error creating token: %s", e)
                return Response({"error": "Error creating token"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            response_data = {
                'message': 'Login successful',
                'token': token.key,
                'user': {
                    'id': user.id,
                    'email': user.email,
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                }
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        logger.debug("Login validation failed: %s", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)
    
class LogoutViewSet(BaseViewSetNoSerializer):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    @action(methods=['post'], detail=False)
    def logout(self, request, *args, **kwargs):
        logger.debug("Logout request received")
        try:
            request.user.auth_token.delete()
            django_logout(request)  # Log out the user
            return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error("Logout failed: %s", e)
            return Response({'message': 'Logout failed'}, status=status.HTTP_400_BAD_REQUEST)
