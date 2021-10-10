import axios from "axios";

const API_BASE_URL = "http://localhost:8000/photo/";

// 写真一覧を取得
export const getPhotoList = async () => {
  const photo = await fetch(API_BASE_URL, { method: "GET" });
  const json = photo.json();
  return json;
};

// 写真詳細を表示
export const getPhotoDetail = async (id) => {
  const photo = await fetch(API_BASE_URL + id, {
    method: "GET",
  });
  const json = photo.json();
  return json;
};

// 写真を投稿
export const createPhoto = ({ title, comment, image }) => {
  console.log(title, comment);
  console.log(image);
};

// 投稿を削除
export const deletePhoto = (id) => {
  console.log(id);
  axios
    .delete(API_BASE_URL + id)
    .then((res) => {
      console.log("success delete");
      window.location.href('http://localhost:3000/');
    })
    .catch((err) => {
      console.log(err);
    });
};
