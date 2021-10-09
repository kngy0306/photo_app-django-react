from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from photo.views import PhotoListViewSet
from rest_framework import routers

router = routers.DefaultRouter()

router.register(r'photo', PhotoListViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]

urlpatterns += static(
    settings.IMAGE_URL,
    document_root=settings.IMAGE_ROOT
)