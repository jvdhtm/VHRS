from rest_framework.routers import SimpleRouter
from news import views

router = SimpleRouter()

router.register(r'newsletter', views.NewsLetterViewSet)
router.register(r'comment', views.CommentViewSet)

urlpatterns = router.urls
