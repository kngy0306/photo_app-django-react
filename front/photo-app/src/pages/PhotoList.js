import { useState, useEffect } from "react";
import { getPhotoList } from "../api/getPhoto";

export const PhotoList = () => {
  const dataElement = {
    id: "",
    title: "",
    image: "",
    category: "",
  };

  const [photoList, setPhotoList] = useState(dataElement);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPhotoList()
      .then((photo) => {
        setPhotoList(photo);
        setLoading(false);
      })
      .catch((e) => {
        throw new Error(e);
      });
  }, []);
  return (
    <div>
      <h1>PhotoList</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {photoList.map((photo, index) => {
            return <div key={index}>
              {photo.title}
              <br />
              <img src={`http://localhost:8000${photo.image}`} alt={`${photo.image.split("/images/")[1]}`} />
            </div>;
          })}
        </div>
      )}
    </div>
  );
};
