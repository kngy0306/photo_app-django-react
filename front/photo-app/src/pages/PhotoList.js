import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPhotoList } from "../api/index";
import { Grid, ImageList, ImageListItem, Box } from "@mui/material";

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
    <Box mt={5}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Box>
          <Grid
            container
            spacing={2}
            justifyContent="space-around"
            alignItems="center"
          >
            <ImageList variant="masonry" cols={5} gap={8}>
              {photoList.map((photo, index) => {
                return (
                  <Grid item xs={5} md={2}>
                    <ImageListItem key={index}>
                      <div key={index}>
                        <Link to={`/photo/${photo.id}`}>
                          <img
                            src={`${photo.image}?w=508&fit=crop&auto=format`}
                            alt={photo.title}
                            style={{ width: "100px" }}
                          />
                        </Link>
                      </div>
                    </ImageListItem>
                  </Grid>
                );
              })}
            </ImageList>
          </Grid>
        </Box>
      )}
    </Box>
  );
};
