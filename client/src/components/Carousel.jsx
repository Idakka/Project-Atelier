import React, { useEffect, useState } from 'react';
import Card from './Card.jsx';
import axios from 'axios';

const Carousel = ({ productId, cardType }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // if cardType is related
    axios.get('/products/22122/related')
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch(err => console.log(err));
    // if cardType is outfit
  }, []);

  return (
    <div className="carousel__overflow">
      <div className="carousel__edge carousel__edge--left">
        <span className="material-icons">arrow_backward</span>
      </div>
      <div className="carousel" data-testid="carousel">
        {products.map(product => (
          <Card key={product.id} product={product} cardType={cardType} />
        ))}
      </div>
      <div className="carousel__edge carousel__edge--right">
        <span className="material-icons">arrow_forward</span>
      </div>
    </div>
  );
};

export default Carousel;
