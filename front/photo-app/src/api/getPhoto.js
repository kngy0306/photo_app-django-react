export const getPhotoList = async () => {
  const photo = await fetch("http://localhost:8000/photo/", {method: 'GET'});
  const json = photo.json();
  return json;
}