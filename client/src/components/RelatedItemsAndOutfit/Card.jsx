import React, { useEffect, useState } from 'react';
import StarReview from '../StarReview.jsx';

import axios from 'axios';

const Card = ({ product, cardType }) => {
  return (
    <div className="card product" data-testid={`card--${cardType}`}>
      <div className="product__picture">
        <img src={product.defaultStyle.photos[0].url} alt={product.name} />
        {cardType === 'related' && (
          <span className="material-icons star">star_outline</span>
        )}
        {cardType === 'outfit' && (
          <span className="material-icons remove">highlight_off</span>
        )}
      </div>
      <div className="product__details">
        <p className="product__category">{product.category}</p>
        <p className="product__name">{product.name}</p>
        <p className="product__price">${product.defaultStyle.sale_price ? product.defaultStyle.sale_price.split('.')[0] : product.defaultStyle.original_price.split('.')[0]}</p>
        <StarReview rating={product.rating} />
      </div>
    </div>
  );
};

export default Card;
