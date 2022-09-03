from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins
from questions.serializers import QuestionSerializer, QuestionsRelatedLinkSerializer, answersSerializer
from questions.models import Question, QuestionsRelatedLink, answers
from rest_framework.permissions import IsAuthenticated
from django_filters import rest_framework as filters

class CreateListMixin:
    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get('data', {}), list):
            kwargs['many'] = True

        return super().get_serializer(*args, **kwargs)


class QuestionViewSet(CreateListMixin, ModelViewSet):
    queryset = Question.objects.order_by('pk')
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticated,]


class QuestionsRelatedLinkViewSet(CreateListMixin, ModelViewSet):
    queryset = QuestionsRelatedLink.objects.order_by('pk')
    serializer_class = QuestionsRelatedLinkSerializer
    permission_classes = [IsAuthenticated,]


class answersViewSet(CreateListMixin, ModelViewSet):
    queryset = answers.objects.order_by('pk')
    serializer_class = answersSerializer
    permission_classes = [IsAuthenticated,]
