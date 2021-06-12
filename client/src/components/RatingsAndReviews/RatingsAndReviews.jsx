import React, { useEffect, useState } from 'react';
import StarReview from '../StarReview.jsx';
import ReviewsList from './ReviewsList.jsx';

const RatingsAndReviews = function({ onChangeFileHandler, onClickUploadHandler, productId, reviews, reviewsMeta }) {

  const [_reviews, setReviews] = useState([]);
  const [reviewsLength, setReviewsLength] = useState(0);
  const [reviewsToShow, setReviewsToShow] = useState([]);
  const [reviewsToShowLength, setReviewsToShowLength] = useState(2);

  useEffect(() => {
    setReviews(reviews);
    setReviewsLength(reviews.length);
    setReviewsToShow(reviews.slice(0, reviewsToShowLength));
    setReviewsToShowLength(reviewsToShowLength + 2);
  }, []);

  const calculateRating = function(ratings) {
    // *There is poorly formatted data coming in from the mock API json object. repeated key names make counting by key inaccurate
    let ratingCount = 0;
    let ratingTally = 0;
    for (let i = 0; i < 5; i++) {
      if (ratings[i]) {
        ratingTally += Number.parseInt(ratings[i]);
        ratingCount++;
      }
      console.log('checking calculateRating: ', ratingCount, ratingTally);
    }
    return ratingTally / parseFloat(ratingCount);
  };
  let rating = calculateRating(reviewsMeta.ratings);

  return (
    <div id="ratings-main" data-testid="ratings-main">
      <div id="ratings-left-pane">
        <div id="left-pane-title">
          <h1>RatingsAndReviews!</h1>
        </div>
        <div className="rating-left">
          <div className="number-rating">{rating}</div>
          <StarReview rating={rating}/>
        </div>
        <div className="recommend-percent">100% of reviews recommend this product</div>
        <div className="star-chart">
          <img src='img/star_breakdown_placeholder.png' /></div>
        <div className="review-size">
          <img src='img/size_placeholder.png' /></div>
        <div className="review-comfort">
          <img src='img/comfort_placeholder.png' /></div>
      </div>
      <div id="ratings-right-pane">
        <div id="ratings-title">{reviews.length} reviews, sorted by

          <select name="sort-parameter" id="sort-parameter" onChange={(i) => {alert("This feature only available to premium subscribers!");} }>
            <option value="relevance">relevance

            </option>
            <option value="helpful">helpful</option>
            <option value="newest">newest</option>

          </select>
        </div>
        <ReviewsList reviews={reviewsToShow} />
        <div id="ratings-right-pane-footer">
          <div type="button" className="review-btn">
            <button className="rnr-button" onClick={() => {
              setReviewsToShowLength(reviewsToShowLength + 2);
              setReviewsToShow(_reviews.slice(0, reviewsToShowLength));
            }}>MORE REVIEWS</button>
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