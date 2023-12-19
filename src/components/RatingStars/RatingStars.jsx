import React from "react";

import "./RatingStars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RatingStars = ({ rating = 0 }) => {
  return (
    <div className="RatingStars__container">
      {[...new Array(5)].map((_, index) => (
        <FontAwesomeIcon
          icon={faStar}
          color={index + 1 <= rating ? "orange" : "rgba(255, 255, 255, 0.8)"}
        />
      ))}
    </div>
  );
};

export default RatingStars;
