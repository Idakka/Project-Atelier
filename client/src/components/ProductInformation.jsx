import React from 'react';
import StarReview from './StarReview.jsx';

var ProductInformation = function(props) {
  return (
    <React.Fragment>
      <div className="stars-and-reviews">
        <StarReview rating='4.5'/>&nbsp;<span className="read-all-reviews">Read all reviews</span>
      </div>
      <div data-testid="product-information">
        <div className="product-detail-category">Category</div>
        <div className="product-detail-expanded-product-name">Expanded Product Name</div>
        <div className="product-detail-price">$369</div>
      </div>
    </React.Fragment>
  );
};

export default ProductInformation;