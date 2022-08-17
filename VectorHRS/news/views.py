from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins
from news.serializers import 
from news.models import 
from rest_framework.permissions import IsAuthenticated

class CreateListMixin:
    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get('data', {}), list):
            kwargs['many'] = True

        return super().get_serializer(*args, **kwargs)
