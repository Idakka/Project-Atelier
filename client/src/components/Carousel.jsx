import React, { useEffect, useState } from 'react';
import Card from './Card.jsx';
import axios from 'axios';

const Carousel = ({ productId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/products/22122/related')
      .then(response => {
        console.log(response.data);
        return setProducts(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="carousel">
      {products.map(product => (
        <Card key={product.id} />
      ))}
    </div>
  );
};

export default Carousel;
