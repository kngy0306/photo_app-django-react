import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { getPhotoCategory } from "../api/getPhoto";

export const PhotoCategory = () => {
  const dataElement = {
    id: "",
    title: "",
    image: "",
  };

  const [photoCategory, setPhotoList] = useState(dataElement);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    getPhotoCategory(category)
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
      <h1>PhotoCategory: {category}</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {photoCategory.map((photo, index) => {
            return <div key={index}>
              <Link to={`/photo/${photo.id}`}>
              {photo.title}
              </Link>
              <br />
              <img src={`http://localhost:8000${photo.image}`} alt={`${photo.image.split("/images/")[1]}`} style={{width:"100px"}}/>
            </div>;
          })}
        </div>
      )}
    </div>
  );
};
