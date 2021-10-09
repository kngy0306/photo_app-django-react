from django.urls import path
from . import views

urlpatterns = [
    path('', views.PhotoList.as_view()),
    path('<int:pk>/', views.PhotoDetail.as_view()),
    path('<str:category>/', views.PhotoCategory.as_view()),
]