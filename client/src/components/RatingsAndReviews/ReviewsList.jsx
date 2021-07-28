import React from 'react';
import Review from './Review.jsx';
import axios from 'axios';

const ReviewsList = (props) => {
  const reviewHelpful = (reviewId) => {
    axios.put('/reviews/:review_id/helpful', { review_id: reviewId })
      .then(info => info)
      .catch(err => err);
  };

  const reportReview = (reviewId) => {
    axios.put('/reviews/:review_id/report', { review_id: reviewId })
      .then(info => info)
      .catch(err => err);
  };

  return (
    <div className="reviews-list" data-testid="reviews-list">
      {props.reviews.map((review, index) =>
        <Review key={index} review={review} reviewHelpful={reviewHelpful} reportReview={reportReview} />
      )}
    </div>
  );
};

export default ReviewsList;