"""
Django settings for VectorHRS project.

Generated by 'django-admin startproject' using Django 3.2.4.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""

import os
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-t@2a7x7fbdcstln+3^5$-)!hqo(tr6l5m#t93@lt+x0il!s7in'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']  # Adjust to your production domain(s)

AUTH_USER_MODEL = 'identity_api.CustomUser'

# SWAGGER (OpenAPI) Settings
SWAGGER_SETTINGS = {
    "DEFAULT_FIELD_INSPECTORS": [
        "drf_yasg.inspectors.CamelCaseJSONFilter",
        "drf_yasg.inspectors.ReferencingSerializerInspector",
        "api_doc.inspectors.relatedResourceFieldInspector",
        "drf_yasg.inspectors.ChoiceFieldInspector",
        "drf_yasg.inspectors.FileFieldInspector",
        "drf_yasg.inspectors.DictFieldInspector",
        "drf_yasg.inspectors.JSONFieldInspector",
        "drf_yasg.inspectors.HiddenFieldInspector",
        "drf_yasg.inspectors.RecursiveFieldInspector",
        "drf_yasg.inspectors.SerializerMethodFieldInspector",
        "drf_yasg.inspectors.SimpleFieldInspector",
        "drf_yasg.inspectors.StringDefaultFieldInspector",
    ]
}

# Application definition
INSTALLED_APPS = [
    'drf_yasg',
    'utils.apps.UtilsConfig',
    'base.apps.BaseConfig',
    'people.apps.PeopleConfig',
    'news.apps.NewsConfig',
    'identity_api.apps.IdentityApiConfig',
    'questions.apps.QuestionsConfig',
    'api_doc.apps.ApiDocConfig',
    'staff_api.apps.StaffApiConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework.authtoken',
    'django_seed',
    'django_extensions',
    'ckeditor',
    'bleach',
    'django_filters',
    'modelcluster',
    'taggit',
]

# Faker Settings
FAKER_LOCALE = None     # settings.LANGUAGE_CODE is loaded
FAKER_PROVIDERS = None  # faker.DEFAULT_PROVIDERS is loaded (all)

# Middleware Settings
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# Root URL Configuration
ROOT_URLCONF = 'VectorHRS.urls'

# Template Configuration
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# Rest Framework Configuration
REST_FRAMEWORK = {
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend'],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ],
    'DEFAULT_PAGINATION_CLASS': 'utils.pagination.MycustomPagination',
    'PAGE_SIZE': 5
}

# WSGI Application
WSGI_APPLICATION = 'VectorHRS.wsgi.application'

# Static and Media Files Settings
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

# Wagtail CMS Settings
WAGTAIL_SITE_NAME = 'VHRS CMS'
WAGTAILADMIN_BASE_URL = "http://example.com"

# Database Configuration
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'vhrs',
        'USER': 'user',      # Should match MYSQL_USER in Docker Compose
        'PASSWORD': 'admin', # Should match MYSQL_PASSWORD in Docker Compose
        'HOST': 'vhrs_database',  # Docker service name for MySQL container
        'PORT': '3306',
        'OPTIONS': {
            'charset': 'utf8mb4',
        },
    }
}

# Password Validation
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

# Static files (CSS, JavaScript, Images)
STATIC_URL = '/static/'

# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# settings.py

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'level': 'DEBUG',  # Ensure debug level is set appropriately
            'class': 'logging.StreamHandler',
            'formatter': 'verbose',
        },
        'file': {
            'level': 'DEBUG',  # Ensure debug level is set appropriately
            'class': 'logging.FileHandler',
            'filename': os.path.join(BASE_DIR, 'django.log'),  # Adjust path as needed
            'formatter': 'verbose',
        },
    },
    'formatters': {
        'verbose': {
            'format': '%(asctime)s [%(levelname)s] %(name)s: %(message)s'
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console', 'file'],
            'level': 'DEBUG',  # Adjust level as needed
            'propagate': True,
        },
        'identity_api': {  # Replace with your actual app name
            'handlers': ['console', 'file'],
            'level': 'DEBUG',  # Adjust level as needed
            'propagate': True,
        },
    },
}
