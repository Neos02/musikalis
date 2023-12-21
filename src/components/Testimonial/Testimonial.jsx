import React from "react";

import "./Testimonial.css";
import RoundedImage from "../RoundedImage/RoundedImage";
import RatingStars from "../RatingStars/RatingStars";

const Testimonial = ({ rating = 0, text, author, date, photo }) => {
  return (
    <div className="gray-gradient Testimonial__container">
      <RatingStars rating={rating} />

      <p className="text-large">{text}</p>

      <div className="Testimonial__post-info">
        <RoundedImage
          src={photo}
          width="3.5rem"
          height="3.5rem"
          alt={`${author}'s profile`}
        />

        <div>
          <p>{author}</p>
          <p className="Testimonial__date">
            {date.toLocaleString("en", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
