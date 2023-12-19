import React from "react";

import "./FeatureItem.css";

const FeatureItem = ({
  index = 0,
  header = "",
  body = "",
  textColor = "rgba(255, 255, 255, 0.5)",
  background = "linear-gradient(to bottom, color-mix(in srgb, white, rgb(var(--gray)) 90%), color-mix(in srgb, black, rgb(var(--gray)) 85%))",
}) => {
  return (
    <div
      className="FeatureItem__container"
      style={{
        background,
      }}
    >
      <h3 className="FeatureItem__number">
        {index.toString().padStart(2, "0")}
      </h3>

      <div className="FeatureItem__content">
        <h2>{header}</h2>
        <p className="FeatureItem__body" style={{ color: textColor }}>
          {body}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
