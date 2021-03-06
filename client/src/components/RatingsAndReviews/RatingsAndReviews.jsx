import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarReview from '../StarReview.jsx';
import ReviewsList from './ReviewsList.jsx';
import calculateRating from '../../scripts/calculateRating.js';
import AddReviewModal from './AddReviewModal.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 0,
      _reviews: [],
      reviewsLength: 0,
      reviewsToShow: [],
      reviewsToShowLength: 2,
      filters: [],
      sortBy: ''
    };
    this.getReviews = this.getReviews.bind(this);
    this.setReviews = this.setReviews.bind(this);
    this.setReviewsLength = this.setReviewsLength.bind(this);
    this.setReviewsToShowLength = this.setReviewsToShowLength.bind(this);
    this.moreReviewsButtonHandler = this.moreReviewsButtonHandler.bind(this);
  }

  // populate reviewsToShow after mounting:
  componentDidMount() {
    this.getReviews(this.props.productId);
  }

  // check if props change and send API request for more reviews
  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.getReviews(this.props.productId);
    }
  }

  getReviews(id) {
    // axios call to get reviews
    let page = 1;
    let count = 200;
    let sort = 'relevance';
    axios.get(`/reviews?page=${page}&count=${count}&sort=${sort}&product_id=${id}`)
      .then(response => {
        this.setReviews(response.data.results);
      })
      .catch(err => err);
  }

  // reportReview(review_id) {

  // }

  // reviewHelpful(review_id) {


  // }

  // sorting and filter handlers:
  // populate state with reviews:
  setReviews(reviews) {
    let newReviewsToShow = reviews.slice(0, 2);
    this.setState({
      _reviews: reviews,
      reviewsLength: reviews.length,
      reviewsToShow: newReviewsToShow,
      reviewsToShowLength: 2
    });
  }

  setReviewsLength() {
    let currentLength = this.state._reviews.length;
    this.setState({
      reviewsLength: currentLength
    });
  }

  setReviewsToShowLength() {
    let currentLength = this.state.reviewsToShowLength;

    if (currentLength <= this.state.reviewsLength) {
      currentLength === this.state.reviewsLength - 1 ? currentLength += 1 : currentLength += 2;
      this.setState({
        reviewsToShowLength: currentLength
      });
    }
  }

  moreReviewsButtonHandler(e) {
    // e.preventDefault();
    this.setReviewsToShowLength();
  }

  render() {
    const {
      top,
      productId,
      currentProduct,
      reviews,
      reviewsMeta,
    } = this.props;

    let rating = calculateRating(reviewsMeta.ratings);
    let moreReviews = this.state.reviewsLength >= this.state.reviewsToShowLength;

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
          <ReviewsList
            reviews={this.state._reviews.length >= 2 ? this.state._reviews.slice(0, this.state.reviewsToShowLength) : reviews}
            // reviewHelpful={reviewHelpful}
            // reportReview={reportReview}
          />
          <div id="ratings-right-pane-footer">
            {
              moreReviews ?
                <div type="button" className="review-btn">
                  <button className="rnr-button" onClick={
                    this.moreReviewsButtonHandler
                  }>MORE REVIEWS</button>
                </div> : null
            }
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
}

export default RatingsAndReviews;