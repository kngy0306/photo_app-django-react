## backend(Django)

### adminsuer
id: root
pass: root1234

### 最初に設定するべきもの
- setting.py内の、言語設定
- 画像を保存するアプリケーションの場合、保存するファイルを指定  
  ↓の記事はurls.pyに`from django.conf import settings`の記載が抜けている。
  https://inglow.jp/techblog/django-image/

### CORSについて

https://qiita.com/karintou/items/52ee1f7c5fa641980188

