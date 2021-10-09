export const getPhotoList = async () => {
  const photo = await fetch("http://localhost:8000/photo/", {method: 'GET'});
  const json = photo.json();
  return json;
}

// 写真詳細を表示
export const getPhotoDetail = async (id) => {
  const photo = await fetch(`http://localhost:8000/photo/${id}`, {method: 'GET'});
  const json = photo.json();
  return json;
}

// カテゴリ別に写真を表示
export const getPhotoCategory = async (category) => {
  const photo = await fetch(`http://localhost:8000/photo/${category}`, {method: 'GET'});
  const json = photo.json();
  return json;
}