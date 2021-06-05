import React from 'react';
import Carousel from './Carousel.jsx';

const RelatedItemsAndOutfit = () => {
  return (
    <section id="related-items-and-outfit" data-testid="related-items-and-outfit">
      <div id="related-items">
        <h2>Related Items</h2>
        <Carousel />
      </div>
      <div id="your-outfit">
        <h2>Your Outfit</h2>
        <Carousel />
      </div>
    </section>
  );
};

export default RelatedItemsAndOutfit;
