import React, { useState } from "react";

const Photo = ({link, author, date, otherDetails, score}) => {
  const [rating, setRating] = useState(score);

  const handleStarClick = newRating => {
    setRating(newRating);
  };

  return (
    <div className="photo">
      <img src={link} alt="img" />
      <div className="photo-details">
        <div className="rating">
          {Array.from({ length: 5 }, (_, i) => (
            <i
              key={i}
              className={`fa fa-star ${i < rating ? "checked" : ""}`}
              onClick={() => handleStarClick(i + 1)}
            ></i>
          ))}
          <span className="rating-score">{rating}</span>
        </div>
        <div className="author">Autor: {author}</div>
        <div className="date">Data dodania: {date}</div>
        <div className="other-details">{otherDetails}</div>
      </div>
    </div>
  );
};

export default Photo;
