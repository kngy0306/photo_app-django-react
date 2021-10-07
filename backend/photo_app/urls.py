from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('photo/', include('photo.urls')),
    path('get-jwt-token', obtain_jwt_token),
]

urlpatterns += static(
    settings.IMAGE_URL, # IMAGE_URL = '/images/'
    document_root=settings.IMAGE_ROOT # IMAGE_ROOTにリダイレクト
)