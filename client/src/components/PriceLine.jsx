import React from 'react';

var PriceLine = function(props) {
  if (props.salePrice !== null) {
    return (
      <div className="product-detail-price">
        <span className="struck-price">${props.originalPrice}</span>&nbsp;
        <span className="sale-price">${props.salePrice}</span>
      </div>
    );
  } else {
    return (
      <div className="product-detail-price">${props.originalPrice}</div>
    );
  }
}

export default PriceLine;