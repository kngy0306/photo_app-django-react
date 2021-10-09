from rest_framework import serializers
from .models import PhotoPost


class PhotoPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhotoPost
        fields = '__all__'
