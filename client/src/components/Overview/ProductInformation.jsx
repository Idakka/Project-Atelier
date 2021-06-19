import React from 'react';
import StarReview from '../StarReview.jsx';
import PriceLine from '../PriceLine.jsx';

const calculateRating = function(ratings) {
  let ratingCount = 0;
  let ratingTally = 0;
  for (let i = 1; i <= 5; i++) {
    if (ratings[i]) {
      ratingCount += Number.parseInt(ratings[i]);
      ratingTally += Number.parseInt(ratings[i]) * i;
    }
  }
  return ratingTally / parseFloat(ratingCount);
};

var ProductInformation = function(props) {
  let { productInfo, productStyles, reviewsMeta } = props;
  let { default_price, category, name } = productInfo;
  let { original_price, sale_price } = productStyles.results[0];
  let { ratings } = reviewsMeta;
  return (
    <React.Fragment>
      <div className="stars-and-reviews">
        <StarReview rating={calculateRating(ratings)}/>&nbsp;<span className="read-all-reviews">Read all reviews</span>
      </div>
      <div data-testid="product-information">
        <div className="product-detail-category">{category}</div>
        <div className="product-detail-expanded-product-name">{name}</div>
        <PriceLine originalPrice={original_price} salePrice={sale_price} />
      </div>
    </React.Fragment>
  );
};

export default ProductInformation;