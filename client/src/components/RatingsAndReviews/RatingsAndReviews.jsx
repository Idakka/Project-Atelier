import React, { useEffect, useState } from 'react';
import StarReview from '../StarReview.jsx';
import ReviewsList from './ReviewsList.jsx';
import calculateRating from '../../scripts/calculateRating.js';
import AddReviewModal from './AddReviewModal.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _reviews: this.props.reviews || [],
      reviewsLength: this.props.reviews.length,
      reviewsToShow: this.props.reviews.slice(0,2) || [],
      reviewsToShowLength: 2,
      filters: [],
      sortBy: ''
    }
  };
  // populate reviewsToShow after mounting:
  componentDidMount() {

  }
  /* sorting and filter handlers:
  // populate state with reviews:
  setReviews() {

  }
  // set reviews length
  setReviewsLength()
  setReviewsToShow()
  setReviewsToShowLength(){
    let currentLength = this.state.reviewsToShowLength;
    reviewsShownLength+=2;
    this.setState({
      reviewsToShowLength: currentLength
    })
  }

  */
  // const [_reviews, setReviews] = useState([]);
  // const [reviewsLength, setReviewsLength] = useState(0);
  // const [reviewsToShow, setReviewsToShow] = useState([]);
  // const [reviewsToShowLength, setReviewsToShowLength] = useState(2);

  // useEffect(() => {
  //   setReviews(reviews);
  //   setReviewsLength(reviews.length);
  //   setReviewsToShow(reviews.slice(0, reviewsToShowLength));
  //   setReviewsToShowLength(reviewsToShowLength + 2);
  // }, []);


  render() {
    const {
      top,
      productId,
      currentProduct,
      reviews,
      reviewsMeta,
    } = this.props

    let rating = calculateRating(reviewsMeta.ratings);

    return (
      <div id="ratings-main" data-testid="ratings-main">
        <div id="ratings-left-pane">
          <div id="left-pane-title">
            RatingsAndReviews!
          </div>
          <div className="rating-left" data-testid="rating-left">
            <div className="number-rating">{rating.toFixed(1)}</div>
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
            <select name="sort-parameter" id="sort-parameter" onChange={(i) => {
              alert('This feature only available to premium subscribers!');
            }}>
              <option value="relevance">relevance</option>
              <option value="helpful">helpful</option>
              <option value="newest">newest</option>
            </select>
          </div>
          <ReviewsList reviews={this.state.reviewsToShow} />
          <div id="ratings-right-pane-footer">
            <div type="button" className="review-btn">
              <button className="rnr-button" onClick={() => {
                setReviewsToShowLength(reviewsToShowLength + 2);
                setReviewsToShow(_reviews.slice(0, reviewsToShowLength));
              }}>MORE REVIEWS</button>
            </div>
            <div className="review-add" data-testid="review-add">
              <button className="add-review-button" data-testid="add-review-button" onClick={(event) => {
                top.showModal(
                <AddReviewModal
                  top={top}
                  productId={productId}
                  currentProduct={currentProduct}
                />);
              }}>ADD A REVIEW +</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RatingsAndReviews;