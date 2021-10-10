import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getPhotoDetail, deletePhoto } from "../api/index";
import { Grid, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

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
  const [date, setDate] = useState("");
  const { id } = useParams();

  const deletePost = (id) => {
    deletePhoto(id);
  };

  const printDate = (date) => {
    setDate(`投稿日時: ${date.split("T")[0]}`);
  };

  useEffect(() => {
    getPhotoDetail(id)
      .then((photo) => {
        setPhotoDetail(photo);
        printDate(photoDetail.posted_at);
        setLoading(false);
      })
      .catch((e) => {
        throw new Error(e);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Grid
            container
            spacing={2}
            style={{ margin: "auto" }}
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item xs={12}>
              <h2>{photoDetail.title}</h2>
            </Grid>
            <Grid item xs={12}>
              <div>{photoDetail.comment}</div>
            </Grid>
            <Grid item xs={12}>
              <img
                src={photoDetail.image}
                alt={photoDetail.title}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <div>{date}</div>
            </Grid>
            <Grid item xs={12}>
                  <Button
                    color="error"
                    variant="contained"
                    onClick={() => deletePost(photoDetail.id)}
                    startIcon={<DeleteIcon />}
                  >
                    削除
                  </Button>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};
