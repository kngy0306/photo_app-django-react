from django.db import models


class PhotoPost(models.Model):
    title = models.CharField(
        verbose_name='タイトル',
        max_length=20
    )

    comment = models.TextField(
        verbose_name='コメント',
    )

    image = models.ImageField(
        verbose_name='イメージ',
        upload_to='images'
    )

    posted_at = models.DateTimeField(
        verbose_name='投稿日時',
        auto_now_add=True
    )

    def __str__(self):
        return self.title
