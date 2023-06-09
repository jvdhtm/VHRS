
from base.views import BaseViewSet, CreateListMixin
from questions.serializers import QuestionSerializer, QuestionsRelatedLinkSerializer, answersSerializer
from questions.models import Question, QuestionsRelatedLink, answers


class QuestionViewSet(CreateListMixin, BaseViewSet):
    queryset = Question.objects.order_by('pk')
    serializer_class = QuestionSerializer


class QuestionsRelatedLinkViewSet(CreateListMixin, BaseViewSet):
    queryset = QuestionsRelatedLink.objects.order_by('pk')
    serializer_class = QuestionsRelatedLinkSerializer


class answersViewSet(CreateListMixin, BaseViewSet):
    queryset = answers.objects.order_by('pk')
    serializer_class = answersSerializer
