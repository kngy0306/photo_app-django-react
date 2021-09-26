from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, viewsets, filters

from .models import PhotoPost


class PhotoList(APIView):
    def get(self, request):
        try:
            photo_list = PhotoPost.objects.order_by('-posted_at')
            res_list = [
                {
                    'id': photo.id,
                    'title': photo.title,
                    'image': photo.image.url,
                    'category': photo.category.title,
                }
                for photo in photo_list
            ]
            return Response(res_list)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
