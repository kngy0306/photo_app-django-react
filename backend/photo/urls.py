from django.urls import path
from . import views

urlpatterns = [
    path('', views.PhotoList.as_view()),
]