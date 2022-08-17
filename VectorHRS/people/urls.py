from rest_framework.routers import SimpleRouter
from people import views

router = SimpleRouter()

router.register(r'api/personstage', views.PersonStageViewSet)
router.register(r'api/person', views.PersonViewSet)
router.register(r'api/address', views.AddressViewSet)
router.register(r'api/phone', views.PhoneViewSet)
router.register(r'api/personlog', views.PersonLogViewSet)
router.register(r'api/expertise', views.ExpertiseViewSet)
router.register(r'api/expertiseprofile', views.ExpertiseProfileViewSet)

urlpatterns = router.urls
