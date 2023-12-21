import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Button.css";

const Button = ({
  label,
  backgroundColor,
  textColor = "black",
  icon,
  bold = false,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`Button__button ${bold ? "header-4" : ""} ${className}`}
      style={{ backgroundColor, color: textColor }}
      {...props}
    >
      {label && <span>{label}</span>}
      {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};

export default Button;
