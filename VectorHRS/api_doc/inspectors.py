from drf_yasg.inspectors.field import *


class relatedResourceFieldInspector(RelatedFieldInspector):
    # This inspector will add the x-prn-relatedResource property that refers to
    #
    def field_to_swagger_object(
        self, field, swagger_object_type, use_references, **kwargs
    ):
        SwaggerType, ChildSwaggerType = self._get_partial_types(
            field, swagger_object_type, use_references, **kwargs
        )

        if isinstance(field, serializers.ManyRelatedField):
            child_schema = self.probe_field_inspectors(
                field.child_relation, ChildSwaggerType, use_references
            )
            return SwaggerType(
                type=openapi.TYPE_ARRAY,
                items=child_schema,
                unique_items=True,
            )

        if not isinstance(field, serializers.RelatedField):
            return NotHandled

        field_queryset = getattr(field, "queryset", None)

        if isinstance(
            field, (serializers.PrimaryKeyRelatedField, serializers.SlugRelatedField)
        ):
            if getattr(field, "pk_field", ""):
                # a PrimaryKeyRelatedField can have a `pk_field` attribute which is a
                # serializer field that will convert the PK value
                result = self.probe_field_inspectors(
                    field.pk_field, swagger_object_type, use_references, **kwargs
                )
                # take the type, format, etc from `pk_field`, and the field-level information
                # like title, description, default from the PrimaryKeyRelatedField
                return SwaggerType(existing_object=result)

            target_field = getattr(field, "slug_field", "pk")
            if field_queryset is not None:
                # if the RelatedField has a queryset, try to get the related model field from there
                model, model_field = get_queryset_field(field_queryset, target_field)
            else:
                # if the RelatedField has no queryset (e.g. read only), try to find the target model
                # from the view queryset or ModelSerializer model, if present
                parent_serializer = get_parent_serializer(field)

                serializer_meta = getattr(parent_serializer, "Meta", None)
                this_model = getattr(serializer_meta, "model", None)
                if not this_model:
                    view_queryset = get_queryset_from_view(self.view, parent_serializer)
                    this_model = getattr(view_queryset, "model", None)

                source = getattr(field, "source", "") or field.field_name
                if not source and isinstance(
                    field.parent, serializers.ManyRelatedField
                ):
                    source = field.parent.field_name

                model = get_related_model(this_model, source)
                model_field = get_model_field(model, target_field)

            attrs = get_basic_type_info(model_field) or {"type": openapi.TYPE_STRING}

            # This if is the only added code.
            if model is not None:
                related_resource = {
                    "x-vhrs-relatedResource": ".".join(
                        [model._meta.app_label, model._meta.object_name]
                    )
                }
            else:
                related_resource = {}
            return SwaggerType(**attrs, **related_resource)
        elif isinstance(field, serializers.HyperlinkedRelatedField):
            return SwaggerType(type=openapi.TYPE_STRING, format=openapi.FORMAT_URI)

        return SwaggerType(type=openapi.TYPE_STRING)