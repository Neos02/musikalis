import React from "react";

import "./FeatureItem.css";

const FeatureItem = ({
  index = 0,
  header = "",
  body = "",
  textColor = "rgba(255, 255, 255, 0.5)",
  background = "linear-gradient(to bottom, color-mix(in srgb, white, rgb(var(--gray)) 90%), color-mix(in srgb, black, rgb(var(--gray)) 85%))",
  className = "",
  style = {},
  ...props
}) => {
  return (
    <div
      className={`FeatureItem__container ${className}`}
      style={{
        background,
        ...style,
      }}
      {...props}
    >
      <h3 className="FeatureItem__number" aria-hidden>
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
