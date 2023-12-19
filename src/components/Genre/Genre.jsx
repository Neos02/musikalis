import React from "react";

import RoundedImage from "../RoundedImage/RoundedImage";
import "./Genre.css";
import Button from "../Button/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { green } from "../../colors";

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

      <a className="Genre__hover" href="#">
        <Button
          className="Genre__hover-btn"
          backgroundColor={`rgb(${green})`}
          icon={faArrowRight}
        />
      </a>

      <h2 className="Genre__label">{label}</h2>
    </div>
  );
};

export default Genre;
