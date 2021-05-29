import React, { useEffect, useState } from 'react';

const Card = ({ productId, cardType }) => {
  // All of these are default values that we will remove when API implementation is ready
  const [photoURL, setPhotoURL] = React.useState('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/600px-Placeholder_no_text.svg.png');
  const [category, setCategory] = React.useState('Placeholder Category');
  const [name, setName] = React.useState('Placeholder Name');
  const [price, setPrice] = React.useState('$100.00');
  const [rating, setRating] = React.useState(4);

  const starGraphic = '#';

  React.useEffect(() => {
    // make API call to get product info. in cb:
      // set category
      // set name
      // set price
    // make API call to get rating info. in cb:
      // set rating
    // make API call to get style info. in cb:
      // set image url
  }, []);

  return (
    <div className="card product">
      <div className="product__img">
        <img src={photoURL} alt={name} />
        {cardType === 'related' && (
          <img src={starGraphic} alt="Star" className="card__action" />
        )}
        {cardType === 'outfit' && (
          <img src={removeGraphic} alt="Remove" className="card__action" />
        )}
      </div>
      <div className="product__details">
        <p className="product__category">{category}</p>
        <p className="product__name">{name}</p>
        <p className="product__price">{price}</p>
        {/* Will be a star component */}
        <p className="product__rating">{rating}</p>
      </div>
    </div>
  );
};

export default Card;
