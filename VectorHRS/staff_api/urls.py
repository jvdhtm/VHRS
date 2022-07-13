from rest_framework.routers import SimpleRouter
from staff_api import views

router = SimpleRouter()

router.register(r'personstage', views.PersonStageViewSet)
router.register(r'staffstage', views.StaffStageViewSet)
router.register(r'person', views.PersonViewSet)
router.register(r'personlog', views.PersonLogViewSet)
router.register(r'expertise', views.ExpertiseViewSet)
router.register(r'expertiseprofile', views.ExpertiseProfileViewSet)
router.register(r'condition', views.ConditionViewSet)
router.register(r'department', views.DepartmentViewSet)
router.register(r'staff', views.StaffViewSet)
router.register(r'stafflog', views.StaffLogViewSet)
router.register(r'function', views.FunctionViewSet)
router.register(r'stafffunctions', views.StaffFunctionsViewSet)
router.register(r'address', views.AddressViewSet)
router.register(r'phone', views.PhoneViewSet)
router.register(r'comments', views.CommentsViewSet)

urlpatterns = router.urls
