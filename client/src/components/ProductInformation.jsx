import React from 'react';
import StarReview from './StarReview.jsx';

const calculateRating = function(ratings) {
  let ratingCount = 0;
  let ratingTally = 0;
  for (let i = 1; i <= 5; i++) {
    if (ratings[i]) {
      console.log(i + ": " + ratings[i]);
      ratingCount += Number.parseInt(ratings[i]);
      ratingTally += Number.parseInt(ratings[i]) * i;
    }
  }
  return ratingTally / parseFloat(ratingCount);
};

var ProductInformation = function(props) {
  let { productInfo, reviewsMeta } = props;
  let { default_price, category, name } = productInfo;
  let { ratings } = reviewsMeta;
  console.log('ratings: ', ratings);
  return (
    <React.Fragment>
      <div className="stars-and-reviews">
        <StarReview rating={calculateRating(ratings)}/>&nbsp;<span className="read-all-reviews">Read all reviews</span>
      </div>
      <div data-testid="product-information">
        <div className="product-detail-category">{category}</div>
        <div className="product-detail-expanded-product-name">{name}</div>
        <div className="product-detail-price">${default_price}</div>
      </div>
    </React.Fragment>
  );
};

export default ProductInformation;