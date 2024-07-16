from django.urls import path
from rest_framework.routers import SimpleRouter
from . import views

# Define SimpleRouter instance
router = SimpleRouter()

# Register your ViewSets
router.register(r'user', views.UserViewSet)
router.register(r'app', views.AppViewSet)
router.register(r'role', views.RoleViewSet)
router.register(r'auth', views.LoginViewSet, basename='login')
router.register(r'logout', views.LogoutViewSet, basename='logout')


urlpatterns = router.urls
