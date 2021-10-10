import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPhotoList } from "../api/index";

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
            return (
              <div key={index}>
                <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
                <br />
                <img
                  src={photo.image}
                  alt={photo.title}
                  style={{ width: "100px" }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
