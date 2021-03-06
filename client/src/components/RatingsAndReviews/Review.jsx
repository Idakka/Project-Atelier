import React from 'react';
import StarReview from '../StarReview.jsx';
import { format } from 'date-fns';

const Review = ({ review, reviewHelpful, reportReview }) => {
  return (
    <React.Fragment>
      <div className="review-card" data-testid="review-card">
        <div className="review-header">
          <StarReview rating={review.rating}/>
          <div className="author">{review.reviewer_name}, {format((new Date(review.date)), "MMMM do, yyyy")}
          </div>
        </div>
        <div className="review-title">{review.summary}</div>
        <div className="review-block">
          {review.body}
        </div>
        {review.response &&
          <div className="response-block">
            <h3>Response:</h3>
            <p>{review.response}</p>
          </div>
        }
        <div className="review-footer">Helpful? <span onClick={() => reviewHelpful(review.review_id)}>Yes</span> ({review.helpfulness || ''}) | <span onClick={() => reportReview(review.review_id)}>Report</span>
        </div>
        <hr></hr>
      </div>
    </React.Fragment>
  );
};

export default Review;