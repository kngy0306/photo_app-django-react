from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('photo/', include('photo.urls')),
]

urlpatterns += static(
    settings.IMAGE_URL, # IMAGE_URL = '/images/'
    document_root=settings.IMAGE_ROOT # IMAGE_ROOTにリダイレクト
)