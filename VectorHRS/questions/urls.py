from rest_framework.routers import SimpleRouter
from questions import views

router = SimpleRouter()

router.register(r'question', views.QuestionViewSet)
router.register(r'questionsrelatedlink', views.QuestionsRelatedLinkViewSet)
router.register(r'answers', views.answersViewSet)

urlpatterns = router.urls
