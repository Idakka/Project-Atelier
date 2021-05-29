import React from 'react';
import Card from './Card.jsx';

const Carousel = () => {
  return (
    <div className="carousel">
      <p>Carousel Placeholder</p>
      {[1].map(product => (
        <Card key={product} />
      ))}
    </div>
  );
};

export default Carousel;
