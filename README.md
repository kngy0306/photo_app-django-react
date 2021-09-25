# photo_app-django-react

### Usage

```bash
git clone https://github.com/kngy0306/photo_app-django-react.git

cd photo_app-django-react

docker-compose build --no-cache

docker-compose up -d
```


### 初期のディレクトリ構成 && プロジェクトの作成
※front, backendの中身は空

```bash
.
├── backend
├── docker
│   ├── node
│   │   └── Dockerfile
│   └── python
│       └── Dockerfile
├── docker-compose.yml
├── front
```

**dockerイメージのビルド**

```bash
docker-compose build --no-cache
```

**Reactのプロジェクト作成**

```bash
docker-compose run --rm front sh -c "npx create-react-app photo-app"
```

**Djangoのプロジェクト作成**

```bash
docker-compose run backend django-admin startproject photo_app .
```

**コンテナの立ち上げ**

```bash
docker-compose up -d
```

### 参考記事
ディレクトリ構成、docker-compose.ymlの書き方  
https://qiita.com/sam8helloworld/items/e7fffa9afc82aea68a7a  

DockerでReact開発環境を構築する  
https://blog.web.nifty.com/engineer/2714  

Django4がインストールされたことによるエラー  
https://stackoverflow.com/questions/67061683/django-deprecated-error-in-django-admin