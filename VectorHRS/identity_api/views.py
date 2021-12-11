from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins
from identity_api.serializers import UserSerializer, AppSerializer, RoleSerializer
from identity_api.models import User, App, Role


class BulkCreateModelMixin(mixins.CreateModelMixin):

    def create(self, request, *args, **kwargs):
        # The initial serializer
        serializer = self.get_serializer(data=request.DATA)
        return_list = []

        for item in zip(serializer.errors, serializer.init_data):
            # If item doesn't have errors
            if not item[0]:

                # Create a an individual serializer for the valid object and save it
                object_serializer = self.get_serializer(data=[item[1]])
                if object_serializer.is_valid():
                    self.pre_save(object_serializer.object)
                    self.object = object_serializer.save(force_insert=True)
                    self.post_save(self.object, created=True)

                    return_list.append(object_serializer.data[0])
            else:
                return_list.append(item[0])

        # Status code
        if serializer.errors:
            return_status = status.HTTP_206_PARTIAL_CONTENT
        else:
            return_status = status.HTTP_201_CREATED

        return Response(return_list, status=return_status)



class UserViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = User.objects.order_by('pk')
    serializer_class = UserSerializer


class AppViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = App.objects.order_by('pk')
    serializer_class = AppSerializer


class RoleViewSet(ModelViewSet, BulkCreateModelMixin):
    queryset = Role.objects.order_by('pk')
    serializer_class = RoleSerializer
