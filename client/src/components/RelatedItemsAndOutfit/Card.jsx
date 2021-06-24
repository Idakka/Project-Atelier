import React, { useEffect, useState } from 'react';
import StarReview from '../StarReview.jsx';
import Comparison from './Comparison.jsx';

import axios from 'axios';

const Card = ({ top, product, cardType, onAction }) => {
  return (
    <div className="card product" data-testid={`card--${cardType}`}>
      <div className="product__picture">
        {/* If there is no picture, inform the user */}
        {product.defaultStyle.photos[0].url ? (
          <img src={product.defaultStyle.photos[0].url} alt={product.name} />
        ) : (
          <div className="product__no-picture-provided">
            <span className="material-icons broken_image">broken_image</span>
            <p className="product__name">No Picture Provided</p>
          </div>
        )}
        {cardType === 'related' && (
          <span
            className="material-icons star"
            onClick={() => onAction(
              <Comparison
                top={top}
                currentProduct={top.state.products[top.state.currentProductId]}
                relatedProduct={product}
              />
            )}
          >
            star_outline
          </span>
        )}
        {cardType === 'outfit' && (
          <span
            className="material-icons remove"
            onClick={() => onAction('remove', product.id)}
          >
            highlight_off
          </span>
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
