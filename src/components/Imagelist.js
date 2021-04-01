import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

function Imagelist({ images }) {
  const image = images.map((image) => {
    // return <img key={id} src={urls.regular} alt={description} />;
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{image}</div>;
}

export default Imagelist;
