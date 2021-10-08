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

class PhotoDetail(APIView):
    def get(self, request, pk):
        try:
            try:
                photo = PhotoPost.objects.get(id=pk)
            except:
                return Response("Not Found", status=status.HTTP_404_NOT_FOUND)
            res = {
                'id': photo.id,
                'title': photo.title,
                'comment': photo.comment,
                'image': photo.image.url,
                'category': photo.category.title,
                'posted_at': photo.posted_at,
            }
            return Response(res)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
