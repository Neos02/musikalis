import React from "react";

import "./OvalImage.css";

const OvalImage = ({
  src,
  width,
  height,
  border = false,
  imageBg = "white",
  imageX = "50%",
  imageY = "50%",
  scale = 1,
  alt = "",
  ...props
}) => {
  return (
    <div
      className={border ? "OvalImage__border" : ""}
      style={{
        borderRadius: width,
      }}
      {...props}
    >
      <div
        className="OvalImage__container"
        style={{
          width,
          height,
          borderRadius: width,
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

export default OvalImage;
