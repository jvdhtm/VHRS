from rest_framework.routers import SimpleRouter
from identity_api import views


router = SimpleRouter()

router.register(r'user', views.UserViewSet)
router.register(r'app', views.AppViewSet)
router.register(r'role', views.RoleViewSet)

urlpatterns = router.urls
