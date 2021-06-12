import React from 'react';
import Review from './Review.jsx';

const ReviewsList = (props) => {
  return (
    <div className="reviews-list" data-testid="reviews-list">
      {props.reviews.map((review, index) =>
        <Review key={index} review={review} />
      )}
    </div>
  );
};

export default ReviewsList;