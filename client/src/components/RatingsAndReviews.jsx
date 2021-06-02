import React from 'react';

const RatingsAndReviews = function(props) {
  return (
    <div id="ratings-main">
      <div id="ratings-left-pane">
        <div id="left-pane-title">
          <h1>RatingsAndReviews!</h1>
        </div>
        <div className="rating-left">
          <div className="number-rating">3.5</div>
          <div className="stars">*****</div>
        </div>
        <div className="recommend-percent">100% of reviews recommend this product</div>
        <div className="star-chart">list of stars here!</div>
        <div className="review-size">Size Review Components</div>
        <div className="review-comfort">Comfort Review Components</div>
      </div>
      <div id="ratings-right-pane">
        <div id="ratings-title">248 reviews, sorted by relevance

        </div>
        <div className="review-header">
          <div className="stars">*****</div>
          <div className="author">User1234, January 1, 2019</div>
        </div>
        <div className="review-title">Review Title with word-break...</div>
        <div className="review-block">
          Donuts and gummi bears
        </div>
        <div className="response-block">Response:</div>
        <div className="review-footer">Helpful? Yes (9) | Report</div>
        <div id="ratings-right-pane-footer">
          <div className="review-btn">
            <button>MORE REVIEWS</button>
          </div>
          <div className="review-add">
            <button>ADD A REVIEW +</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RatingsAndReviews;