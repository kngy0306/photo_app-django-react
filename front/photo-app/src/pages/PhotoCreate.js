import { useState } from "react";
import axios from "axios";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { Grid, Button } from "@mui/material";

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
      "Content-Type": "application/json",
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
      <form onSubmit={(e) => photoPost(e)}>
        <Grid
          container
          spacing={2}
          style={{ margin: "auto" }}
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={12}>
            <h2>写真を投稿</h2>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-name"
              label="Title:"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-name"
              label="Comment:"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => processImage(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" variant="contained">
              送信
            </Button>
          </Grid>
          {imagePath ? (
            <p>
              <img src={imagePath} style={{ width: "100px" }} alt="preview" />
            </p>
          ) : null}
        </Grid>
      </form>
    </div>
  );
};
