import React from 'react';
import StarReview from './StarReview.jsx';

const Review = (props) => {
  return (
    <React.Fragment>
      <div className="review-card">
        <div className="review-header">
          <StarReview rating='4.5'/>
          <div className="author">User1234, January 1, 2019</div>
        </div>
        <div className="review-title">Review Title with word-break...</div>
        <div className="review-block">
              Donuts and gummi bears
        </div>
        <div className="response-block">Response:</div>
        <div className="review-footer">Helpful? Yes (9) | Report
        </div>
      </div>
    </React.Fragment>
  );
};

export default Review;