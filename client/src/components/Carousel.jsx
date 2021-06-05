import React, { useEffect, useState } from 'react';
import Card from './Card.jsx';
import axios from 'axios';

const Carousel = ({ productId, carouselType }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // if carouselType is related
    axios.get(`/products/${productId}/related`)
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch(err => console.log(err));
    // if carouselType is outfit
      // get all products saved in outfit and setProducts
  }, []);

  return (
    <React.Fragment>
      <h3 className="carousel__title">{carouselType === 'related' ? 'Related Items' : 'Your Outfit'}</h3>
      <div className="carousel__wrapper">
        <div className="carousel__edge carousel__edge--left">
          <span className="material-icons">arrow_backward</span>
        </div>
        <div className="carousel">
          {products.map(product => (
            <Card key={product.id} product={product} cardType={carouselType} />
          ))}
        </div>
        <div className="carousel__edge carousel__edge--right">
          <span className="material-icons">arrow_forward</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
