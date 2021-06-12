import React from 'react';
import StarReview from '../StarReview.jsx';
import ReviewsList from './ReviewsList.jsx';

const RatingsAndReviews = function(props) {
  return (
    <div id="ratings-main" data-testid="ratings-main">
      <div id="ratings-left-pane">
        <div id="left-pane-title">
          <h1>RatingsAndReviews!</h1>
        </div>
        <div className="rating-left">
          <div className="number-rating">3.5</div>
          <StarReview rating='3.75'/>
        </div>
        <div className="recommend-percent">100% of reviews recommend this product</div>
        <div className="star-chart">list of stars here!</div>
        <div className="review-size">Size Review Components</div>
        <div className="review-comfort">Comfort Review Components</div>
      </div>
      <div id="ratings-right-pane">
        <div id="ratings-title">{props.reviews.length} reviews, sorted by relevance
        </div>
        <ReviewsList reviews={props.reviews} />
        <div id="ratings-right-pane-footer">
          <div className="review-btn">
            <button>MORE REVIEWS</button>
          </div>
          <div className="review-add">
            <input type="file" name="file" onChange={props.onChangeFileHandler} />
            <button type="button" onClick={props.onClickUploadHandler}>Upload</button>
            {/* <button>ADD A REVIEW +</button> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default RatingsAndReviews;