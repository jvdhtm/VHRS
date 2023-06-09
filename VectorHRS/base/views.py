from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

class BaseViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated,]
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.schema.view = self
    
class CreateListMixin:
    def get_serializer(self, *args, **kwargs):
        if isinstance(kwargs.get('data', {}), list):
            kwargs['many'] = True

        return super().get_serializer(*args, **kwargs)