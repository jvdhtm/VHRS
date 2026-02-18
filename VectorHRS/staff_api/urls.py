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

# ==================== HIRING & RECRUITMENT URLS ====================

router.register(r'position', views.PositionViewSet)
router.register(r'candidate', views.CandidateViewSet)
router.register(r'hiringstage', views.HiringStageViewSet)

# ==================== LEAVE & CALENDAR URLS ====================

router.register(r'leave', views.LeaveViewSet)

# ==================== SURVEY URLS ====================

router.register(r'survey', views.SurveyViewSet)
router.register(r'surveyquestion', views.SurveyQuestionViewSet)
router.register(r'surveyresponse', views.SurveyResponseViewSet)

# ==================== 1-ON-1 MEETING URLS ====================

router.register(r'oneonone', views.OneOnOneViewSet)

urlpatterns = router.urls
