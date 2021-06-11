import React from 'react';
import StarReview from './StarReview.jsx';

var ProductInformation = function(props) {
  let { productInfo } = props;
  let { default_price, category, name } = productInfo;
  console.log('props reaching ProductInformation: ', productInfo);
  return (
    <React.Fragment>
      <div className="stars-and-reviews">
        <StarReview rating='4.5'/>&nbsp;<span className="read-all-reviews">Read all reviews</span>
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