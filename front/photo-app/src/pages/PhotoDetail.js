import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getPhotoDetail } from "../api/getPhoto";
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
          <img src={`http://localhost:8000${photoDetail.image}`} alt={`${photoDetail.image.split("/images/")[1]}`} style={{width:"100px"}}/>
          <div><Link to={`/photo/${photoDetail.category}`}>{photoDetail.category}</Link></div>
          <div>{photoDetail.posted_at}</div>
        </div>
      )}
    </div>
  );
};
