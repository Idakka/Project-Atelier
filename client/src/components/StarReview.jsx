import React from 'react';

const StarReview = ({ rating }) => {
  const stars = [];

  const totalStars = 5;
  // Add a full star for every whole number
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<div className="star-review__star star-review__star--full" key={i}><img src="#" alt="Full star" /></div>);
  }
  // If decimal between .5 and 1, show half-star graphic
  if ((rating - stars.length) >= .5) {
    stars.push(<div className="star-review__star star-review__star--half" key={1}><img src="#" alt="Half star" /></div>);
  }
  // Fill the rest with empty stars
  for (let i = stars.length; i < totalStars; i++) {
    stars.push(<div className="star-review__star star-review__star--empty" key={i}><img src="#" alt="Empty star" /></div>);
  }

  return <div className="star-review" data-testid="star-review">{stars}</div>;
};

export default StarReview;
