# photo_app-django-react

#### TOP画面
<img src="https://user-images.githubusercontent.com/57553474/136688416-732a4c86-2442-4d74-b92e-76f7d20d9610.jpg" width=50%>

#### 写真詳細画面
<img src="https://user-images.githubusercontent.com/57553474/136688418-268b0bcf-3c36-4399-8925-4eed90cce02d.jpg" width=40%>


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
├── requirements.txt
└── front
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

**React Routerのインストール**
```bash
# frontコンテナへログイン
docker-compose exec front sh

yarn add react-router-dom 
```

**styled-componentsのインストール**
```bash
yarn add styled-components
```

**axiosのインストール**
```bash
yarn add axios
```

**Material UIのインストール**
```bash
yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material

# 3rd party
yarn add material-ui-popup-state
```


### 参考記事
ディレクトリ構成、docker-compose.ymlの書き方  
https://qiita.com/sam8helloworld/items/e7fffa9afc82aea68a7a  

DockerでReact開発環境を構築する  
https://blog.web.nifty.com/engineer/2714  

Django4がインストールされたことによるエラー  
https://stackoverflow.com/questions/67061683/django-deprecated-error-in-django-admin
