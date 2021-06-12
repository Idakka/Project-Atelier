import React from 'react';
import StarReview from '../StarReview.jsx';
import ReviewsList from './ReviewsList.jsx';

const RatingsAndReviews = function({ onChangeFileHandler, onClickUploadHandler, productId, reviews, reviewsMeta }) {
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
        <div id="ratings-title">{reviews.length} reviews, sorted by

          <select name="sort-parameter" id="sort-parameter" onChange={(i) => {alert("This feature only available to premium subscribers!")}}>
            <option value="relevance">relevance

            </option>
            <option value="helpful">helpful</option>
            <option value="newest">newest</option>

          </select>
        </div>
        <ReviewsList reviews={reviews} />
        <div id="ratings-right-pane-footer">
          <div className="review-btn">
            <button>MORE REVIEWS</button>
          </div>
          <div className="review-add">
            <input type="file" name="file" onChange={onChangeFileHandler} />
            <button type="button" onClick={onClickUploadHandler}>Upload</button>
            {/* <button>ADD A REVIEW +</button> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default RatingsAndReviews;