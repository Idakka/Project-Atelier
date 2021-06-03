import React from 'react';

var ProductInformation = function(props) {
  return (
    <React.Fragment>
      <div>Star Review</div>
      <div>
        <div className="product-detail-category">Category</div>
        <div className="product-detail-expanded-product-name">Expanded Product Name</div>
        <div className="product-detail-price">$Price</div>
      </div>
    </React.Fragment>
  );
};

export default ProductInformation;