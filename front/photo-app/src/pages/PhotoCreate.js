import { useState } from "react";
import axios from "axios";

export const PhotoCreate = () => {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [file, setFile] = useState(null);

  const processImage = (event) => {
    const imageFile = event.target.files[0];
    setFile(imageFile);
    const imageUrl = URL.createObjectURL(imageFile);
    setImagePath(imageUrl);
  };

  const photoPost = (e) => {
    const data = new FormData();
    const headers = {
      'Content-Type': 'application/json',
    };
    data.append("title", { title });
    data.append("comment", { comment });
    data.append("image", { file });
    const imgUri = "http://localhost:8000/photo/";
    axios
      .post(imgUri, data, { headers: headers })
      .then((res) => {
        console.log("success upload");
      })  
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>写真を投稿</h1>
      <form onSubmit={(e) => photoPost(e)}>
        <p>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Comment:
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            画像:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => processImage(e)}
            />
          </label>
        </p>
        {imagePath ? (
          <p>
            <img src={imagePath} style={{ width: "100px" }} alt="preview" />
          </p>
        ) : null}
        <input type="submit" value="Submit" />
      </form>

      <p>{title}</p>
      <p>{comment}</p>
      <p>{imagePath}</p>
    </div>
  );
};
