from base.views import BaseViewSet, CreateListMixin
from news.serializers import NewsLetterSerializer, NewsRelatedLinkSerializer, CommentSerializer
from news.models import NewsLetter, NewsRelatedLink, Comment


class NewsLetterViewSet(CreateListMixin, BaseViewSet):
    queryset = NewsLetter.objects.order_by('pk')
    serializer_class = NewsLetterSerializer


class NewsRelatedLinkViewSet(CreateListMixin, BaseViewSet):
    queryset = NewsRelatedLink.objects.order_by('pk')
    serializer_class = NewsRelatedLinkSerializer



class CommentViewSet(CreateListMixin, BaseViewSet):
    queryset = Comment.objects.order_by('pk')
    serializer_class = CommentSerializer
