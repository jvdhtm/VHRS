from rest_framework.routers import SimpleRouter
from people import views

router = SimpleRouter()

router.register(r'personstage', views.PersonStageViewSet)
router.register(r'person', views.PersonViewSet)
router.register(r'address', views.AddressViewSet)
router.register(r'phone', views.PhoneViewSet)
router.register(r'personlog', views.PersonLogViewSet)
router.register(r'expertise', views.ExpertiseViewSet)
router.register(r'expertiseprofile', views.ExpertiseProfileViewSet)

urlpatterns = router.urls
