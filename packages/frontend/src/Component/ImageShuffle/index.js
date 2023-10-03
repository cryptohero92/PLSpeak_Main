import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { FILE_SERVER_URL } from "../../constants/portConstants";
import ReactPlayer from "react-player";

function imageProps(size = 121, rows = 1, cols = 1, fullWidth = false, fullHeight=false) {
  return {
    // src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    // srcSet: `${image}?w=${size * cols}&h=${
    //   size * rows
    // }&fit=crop&auto=format&dpr=2 2x`,
    width: fullWidth ? "100%" : size * cols,
    height: fullHeight ? "100%" : size * rows,
  };
}

export default function ImageShuffle({ images = [] }) {
  return (
    <ImageList
      // sx={{ width: 500, height: 450 }}
      variant="quilted"
      // cols={4}
      // rowHeight={121}
    >
      {images.map((item) => (
        <ImageListItem key={item.filename} cols={item.cols || 1} rows={item.rows || 1}>
          {item.mimetype.startsWith("image/") ? (
            <img
              src={FILE_SERVER_URL + item.filename}
              alt={item.title}
              style={{ borderRadius: 10 }}
              loading="lazy"
              {...imageProps(121, item.rows, item.cols,true, true)}
            />
          ) : (
            <ReactPlayer
              controls={true}
              style={{ borderRadius: 10 }}
              url={FILE_SERVER_URL + item.filename}
              {...imageProps(400, item.rows, item.cols, true, true)}
            />
          )}
        </ImageListItem>
      ))}
    </ImageList>
  );
}
