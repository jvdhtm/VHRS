from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins
from news.serializers import NewsLetterSerializer, NewsRelatedLinkSerializer, CommentSerializer
from news.models import NewsLetter, NewsRelatedLink, Comment
from rest_framework.permissions import IsAuthenticated
from django_filters import rest_framework as filters

class CreateListMixin:
    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get('data', {}), list):
            kwargs['many'] = True

        return super().get_serializer(*args, **kwargs)


class NewsLetterViewSet(CreateListMixin, ModelViewSet):
    queryset = NewsLetter.objects.order_by('pk')
    serializer_class = NewsLetterSerializer
    permission_classes = [IsAuthenticated,]


class NewsRelatedLinkViewSet(CreateListMixin, ModelViewSet):
    queryset = NewsRelatedLink.objects.order_by('pk')
    serializer_class = NewsRelatedLinkSerializer
    permission_classes = [IsAuthenticated,]


class CommentViewSet(CreateListMixin, ModelViewSet):
    queryset = Comment.objects.order_by('pk')
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated,]
