import React, { useEffect, useState } from 'react';
import StarReview from '../StarReview.jsx';
import Comparison from './Comparison.jsx';

import axios from 'axios';

const Card = ({ top, product, cardType, onAction }) => {
  const changeProduct = (event) => {
    if (event.target.closest('.action-button')) {
      return;
    } else {
      top.changeCurrentProduct(product.id);
    }
  };

  return (
    <div
      className="card product"
      data-testid={`card--${cardType}`}
      onClick={(event) => changeProduct(event)}
      style={{cursor: 'pointer'}}
    >
      <div className="product__picture">
        {cardType === 'related' && (
          <span
            className="action-button material-icons star"
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
            className="action-button material-icons remove"
            onClick={() => onAction('remove', product.id)}
          >
            highlight_off
          </span>
        )}
        {/* If there is no picture, inform the user */}
        {product.defaultStyle.photos[0].url ? (
          <img src={product.defaultStyle.photos[0].url} className="product__image" alt={product.name} />
        ) : (
          <div className="product__no-picture-provided">
            <span className="material-icons broken_image">broken_image</span>
            <p className="product__name">No Picture Provided</p>
          </div>
        )}

      </div>
      <div className="product__details">
        <p className="product__category">{product.category}</p>
        <p className="product__name">{product.name}</p>
        <p className="product__price">
          {console.log(product)}
          {product.defaultStyle.sale_price ? (
            <>
              <span className="card__price card__price--sale">${product.defaultStyle.sale_price.split('.')[0]}</span>
              <span className="card__price card__price--discounted">${product.defaultStyle.original_price.split('.')[0]}</span>
            </>
          ) : (
            <span className="card__price">${product.defaultStyle.original_price.split('.')[0]}</span>
          )}
        </p>
        <StarReview rating={product.rating} />
      </div>
    </div>
  );
};

export default Card;
