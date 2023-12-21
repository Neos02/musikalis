import React from "react";

import "./RoundedImage.css";

const RoundedImage = ({
  src,
  width = "10rem",
  height = "10rem",
  border = false,
  borderRadius = width,
  imageBg = "white",
  imageX = "50%",
  imageY = "50%",
  scale = 1,
  alt = "",
  ...props
}) => {
  const calculateInnerRadius = () => {
    return borderRadius
      .split(" ")
      .map((x) => `calc(${x} - .25rem)`)
      .join(" ");
  };

  return (
    <div
      className={border ? "RoundedImage__border" : ""}
      style={{
        borderRadius,
        width,
        height,
      }}
      {...props}
    >
      <div
        className="RoundedImage__container"
        style={{
          width,
          height,
          borderRadius: calculateInnerRadius(),
          background: imageBg,
        }}
      >
        <img
          src={src}
          style={{
            width,
            height,
            objectPosition: `${imageX} ${imageY}`,
            transform: `scale(${scale})`,
          }}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default RoundedImage;
