from rest_framework.routers import SimpleRouter
from staff_api import views

router = SimpleRouter()

router.register(r'staffstage', views.StaffStageViewSet)
router.register(r'condition', views.ConditionViewSet)
router.register(r'department', views.DepartmentViewSet)
router.register(r'staff', views.StaffViewSet)
router.register(r'stafflog', views.StaffLogViewSet)
router.register(r'function', views.FunctionViewSet)
router.register(r'stafffunctions', views.StaffFunctionsViewSet)
router.register(r'staffcomment', views.StaffCommentViewSet)

urlpatterns = router.urls
