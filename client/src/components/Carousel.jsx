import React from 'react';
import Card from './Card.jsx';

const Carousel = () => {
  return (
    <div className="carousel">
      {/* This array is purely to set the stage for the iteration we'll do later */}
      {[1].map(product => (
        <Card key={product} />
      ))}
    </div>
  );
};

export default Carousel;
