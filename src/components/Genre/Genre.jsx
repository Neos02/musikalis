import React from "react";

import RoundedImage from "../RoundedImage/RoundedImage";
import "./Genre.css";

const Genre = ({
  label,
  imageSrc,
  imageScale = 1,
  imageX = "50%",
  imageY = "50%",
}) => {
  return (
    <div className="Genre__container">
      <RoundedImage
        src={imageSrc}
        alt={label}
        width="18rem"
        height="26rem"
        scale={imageScale}
        imageX={imageX}
        imageY={imageY}
      />

      <h2 className="Genre__label">{label}</h2>
    </div>
  );
};

export default Genre;