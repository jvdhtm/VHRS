# -*- coding: utf-8 -*-

import bleach
from ckeditor.fields import RichTextFormField
from django.db import models
from django.utils.safestring import mark_safe


class SanitizedHTMLField(models.TextField):
    """
    A TextField that sanitizes html before saving in the database, using the bleach package
    (https://bleach.readthedocs.io/en/latest/). Accepts the following arguments
    - allowed_tags list of allowed tags, defaults to common markup tags
    - allowed_attributes, dict with tag names as keys and a list of allowed attributes as values, defaults to a pretty
    narrow list of allowed attributes to avoid xss
    - strip_tags' boolan, default False, can be set to True to strip disallowed tags instead of just converting them to
    &gt; and &lt;
    """

    allowed_tags = [
        'a',
        'abbr',
        'acronym',
        'b',
        'blockquote', 'q', 'cite',
        'code', 'dfn', 'var', 'samp', 'kbd',
        'del',
        'em',
        'i',
        '',
        'big',
        'small',
        'tt',
        'li',
        'ol',
        'strong',
        'ul',
        's',
        'sub', 'sup',
        'table', 'thead', 'tbody', 'tfoot', 'tr', 'td', 'th',
        'u',
        'colgroup', 'col',
        'br', 'p', 'hr', 'pre',
        'div', 'span',
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'address',
        'dl', 'dt', 'dd',
        'cite',
        'u'
    ]
    allowed_attributes = {
        'a': ['href', 'title', 'target'],
        'abbr': ['title'],
        'acronym': ['title'],
        'td': ['colspan'],
        'th': ['colspan'],
        'tr': ['rowspan']
    }
    allowed_protocols = ["http", "https", "mailto", "tel"]
    allowed_styles = []

    def __init__(
        self,
        allowed_tags=None,
        allowed_attributes=None,
        allowed_protocols=None,
        allowed_styles=None,
        strip_tags=False,
        *args,
        **kwargs):
        if not allowed_tags is None:
            self.allowed_tags = allowed_tags
        if not allowed_attributes is None:
            self.allowed_attributes = allowed_attributes
        if not allowed_protocols is None:
            self.allowed_protocols = allowed_protocols
        if not allowed_styles is None:
            self.allowed_styles = allowed_styles
        self.strip_tags = strip_tags
        self.config_name = kwargs.pop("config_name", "default")
        self.extra_plugins = kwargs.pop("extra_plugins", [])
        self.external_plugin_resources = kwargs.pop("external_plugin_resources", [])
        super().__init__(*args, **kwargs)

    def pre_save(self, model_instance, add):
        value = super().pre_save(model_instance, add)
        # The __html__ check here will make make it possible to
        # bypass cleaning serverside by using mark_safe.
        # Is that a problem?
        if value and not hasattr(value, '__html__'):
            bleached = bleach.clean(
                value,
                tags=self.allowed_tags,
                attributes=self.allowed_attributes,
                strip=self.strip_tags,
                protocols=self.allowed_protocols,
                strip_comments=True
            )
            setattr(model_instance, self.attname, mark_safe(bleached))
            return bleached
        else:
            return value

    def formfield(self, **kwargs):
        defaults = {
            "form_class": self._get_form_class(),
            "config_name": self.config_name,
            "extra_plugins": self.extra_plugins,
            "external_plugin_resources": self.external_plugin_resources,
        }
        defaults.update(kwargs)
        return super().formfield(**defaults)

    @staticmethod
    def _get_form_class():
        return RichTextFormField
