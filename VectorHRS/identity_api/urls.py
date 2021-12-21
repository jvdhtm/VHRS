from rest_framework.routers import SimpleRouter
from identity_api import views

router = SimpleRouter()

router.register(r'api/user', views.UserViewSet)
router.register(r'api/app', views.AppViewSet)
router.register(r'api/role', views.RoleViewSet)

urlpatterns = router.urls
