import React, { useEffect, useState } from 'react';
import StarReview from './StarReview.jsx';

import axios from 'axios';

const Card = ({ product, cardType }) => {
  const [rating, setRating] = useState(0);
  const [pictureURL, setPictureURL] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');

  useEffect(() => {
    axios.get(`/products/${product.id}/card-info`)
      .then(response => response.data)
      .then(cardInfo => {
        setRating(cardInfo.rating);
        console.log(product.id, cardInfo.rating);
        setPictureURL(cardInfo.pictureURL);
        setOriginalPrice(cardInfo.originalPrice);
        setSalePrice(cardInfo.salePrice);
      });
  }, []);

  cardType = 'related';

  return (
    <div className="card product">
      <div className="product__picture">
        <img src={pictureURL} alt={product.name} />
        {cardType === 'related' && (
          <span className="material-icons">star_outline</span>
        )}
        {cardType === 'outfit' && (
          <span className="material-icons">do_not_disturb</span>
        )}
      </div>
      <div className="product__details">
        <p className="product__category">{product.category}</p>
        <p className="product__name">{product.name}</p>
        <p className="product__price">{salePrice ? salePrice : originalPrice}</p>
        <StarReview rating={rating} />
      </div>
    </div>
  );
};

export default Card;
