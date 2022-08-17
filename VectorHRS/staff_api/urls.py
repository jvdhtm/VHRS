from rest_framework.routers import SimpleRouter
from staff_api import views

router = SimpleRouter()

router.register(r'api/staffstage', views.StaffStageViewSet)
router.register(r'api/condition', views.ConditionViewSet)
router.register(r'api/department', views.DepartmentViewSet)
router.register(r'api/staff', views.StaffViewSet)
router.register(r'api/stafflog', views.StaffLogViewSet)
router.register(r'api/function', views.FunctionViewSet)
router.register(r'api/stafffunctions', views.StaffFunctionsViewSet)
router.register(r'api/comments', views.CommentsViewSet)

urlpatterns = router.urls
