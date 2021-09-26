from django.contrib import admin
from .models import PhotoPost, Category


admin.site.register(Category)
admin.site.register(PhotoPost)
