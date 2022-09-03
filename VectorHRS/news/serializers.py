from rest_framework.serializers import ModelSerializer
from news.models import NewsLetter, NewsRelatedLink, Comment



class NewsLetterSerializer(ModelSerializer):

    class Meta:
        model = NewsLetter
        fields = 'id',  'name',  'description',  'html',  'autor',  'status',  'created_date_time' 


class NewsRelatedLinkSerializer(ModelSerializer):

    class Meta:
        model = NewsRelatedLink
        fields = 'id',  'news',  'name',  'created_date_time' 


class CommentSerializer(ModelSerializer):

    class Meta:
        model = Comment
        fields = 'id',  'name',  'html',  'autor',  'status',  'created_date_time',  'news' 
