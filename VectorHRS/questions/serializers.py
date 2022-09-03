from rest_framework.serializers import ModelSerializer
from questions.models import Question, QuestionsRelatedLink, answers



class QuestionSerializer(ModelSerializer):

    class Meta:
        model = Question
        fields = 'id',  'name',  'html',  'description',  'autor',  'status',  'created_date_time' 


class QuestionsRelatedLinkSerializer(ModelSerializer):

    class Meta:
        model = QuestionsRelatedLink
        fields = 'id',  'question',  'name',  'created_date_time' 


class answersSerializer(ModelSerializer):

    class Meta:
        model = answers
        fields = 'id',  'name',  'html',  'autor',  'status',  'created_date_time',  'question' 
