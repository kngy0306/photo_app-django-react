import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getPhotoDetail, deletePhoto } from "../api/index";
import { Link } from "react-router-dom";

export const PhotoDetail = () => {
  const dataElement = {
    id: "",
    title: "",
    comment: "",
    image: "",
    category: "",
    posted_at: "",
  };

  const [photoDetail, setPhotoDetail] = useState(dataElement);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const deletePost = (id) => {
    deletePhoto(id);
  };

  useEffect(() => {
    getPhotoDetail(id)
      .then((photo) => {
        setPhotoDetail(photo);
        setLoading(false);
      })
      .catch((e) => {
        throw new Error(e);
      });
  }, []);

  return (
    <div>
      <h1>PhotoDetail</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h3>{photoDetail.title}</h3>
          <div>{photoDetail.comment}</div>
          <img
            src={photoDetail.image}
            alt={photoDetail.title}
            style={{ width: "100px" }}
          />
          <div>
            <Link to={`/photo/${photoDetail.category}`}>
              {photoDetail.category}
            </Link>
          </div>
          <div>{photoDetail.posted_at}</div>
          <button onClick={() => deletePost(photoDetail.id)}>削除</button>
        </div>
      )}
    </div>
  );
};
