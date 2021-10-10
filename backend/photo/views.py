from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, viewsets, filters

from .models import PhotoPost
from .serializers import PhotoPostSerializer


class PhotoListViewSet(viewsets.ModelViewSet):
    queryset = PhotoPost.objects.all()
    serializer_class = PhotoPostSerializer