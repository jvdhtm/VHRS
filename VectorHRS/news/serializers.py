from rest_framework.serializers import ModelSerializer
from news.models import NewsLetter, Comment



class NewsLetterSerializer(ModelSerializer):

    class Meta:
        model = NewsLetter
        fields = 'id',  'name',  'html',  'autor',  'status',  'created_date_time' 


class CommentSerializer(ModelSerializer):

    class Meta:
        model = Comment
        fields = 'id',  'name',  'html',  'autor',  'status',  'created_date_time',  'news' 
