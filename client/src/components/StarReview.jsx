import React from 'react';

const StarReview = ({ rating }) => {
  const stars = [];

  const totalStars = 5;
  // Add a full star for every whole number
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(
      <div className="star-review__star star-review__star--full" title="Full star" key={i}>
        <span className="material-icons">star_outline</span>
      </div>
    );
  }
  // If decimal between .75 and 1, show 3/4-star graphic
  if ((rating - stars.length) >= .75) {
    stars.push(
      <div className="star-review__star star-review__star--threequarter" title="Three quarter star" key={'threequarter'}>
        <span className="material-icons">star_outline</span>
      </div>
    );
  }
  // If decimal between .5 and .75, show half-star graphic
  if ((rating - stars.length) >= .5) {
    stars.push(
      <div className="star-review__star star-review__star--half" title="Half star" key={'half'}>
        <span className="material-icons">star_outline</span>
      </div>
    );
  }
  // If decimal between .25 and .5, show 1/4-star graphic
  if ((rating - stars.length) >= .25) {
    stars.push(
      <div className="star-review__star star-review__star--quarter" title="Quarter star" key={'quarter'}>
        <span className="material-icons">star_outline</span>
      </div>
    );
  }
  // Fill the rest with empty stars
  for (let i = stars.length; i < totalStars; i++) {
    stars.push(
      <div className="star-review__star star-review__star--empty" title="Empty star" key={i}>
        <span className="material-icons">star_outline</span>
      </div>
    );
  }

  return <div className="star-review" data-testid="star-review">{stars}</div>;
};

export default StarReview;
