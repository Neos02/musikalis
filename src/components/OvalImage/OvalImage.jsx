import React from "react";

import "./OvalImage.css";

const OvalImage = ({
  src,
  width,
  height,
  border = false,
  imageBg = "white",
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
          }}
        />
      </div>
    </div>
  );
};

export default OvalImage;
