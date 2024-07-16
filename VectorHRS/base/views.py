from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import  TokenAuthentication


class BaseViewSetNoPermission(ModelViewSet):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.schema.view = self
        
class BaseViewSet(ModelViewSet):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated,]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.schema.view = self

class BaseViewSetNoSerializer(ViewSet):
    permission_classes = [IsAuthenticated,]
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.schema.view = self
    
class CreateListMixin:
    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get('data', {}), list):
            kwargs['many'] = True

        return super().get_serializer(*args, **kwargs)