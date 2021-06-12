import React from 'react';
import StarReview from './StarReview.jsx';
import { format } from "date-fns";

const Review = ({review}) => {
  return (
    <React.Fragment>
      <div className="review-card">
        <div className="review-header">
          <StarReview rating={review.rating}/>
          <div className="author">{review.reviewer_name}, {format((new Date(review.date)), "MMMM do, yyyy")}
          </div>
        </div>
        <div className="review-title">Review Title with word-break...</div>
        <div className="review-block">
              here is some dynamic text: {review.summary}
        </div>
        <div className="response-block">Response:</div>
        <div className="review-footer">Helpful? Yes (9) | Report
        </div>
      </div>
    </React.Fragment>
  );
};

export default Review;