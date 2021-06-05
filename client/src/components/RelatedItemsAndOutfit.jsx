import React from 'react';
import Carousel from './Carousel.jsx';

const RelatedItemsAndOutfit = () => {
  return (
    <section
      id="related-items-and-outfit"
      className="related-items-and-outfit"
      data-testid="related-items-and-outfit"
    >
      <div id="related-items">
        <Carousel productId={22122} carouselType={'related'}/>
      </div>
      <div id="your-outfit">
        <Carousel productId={22123} carouselType={'outfit'}/>
      </div>
    </section>
  );
};

export default RelatedItemsAndOutfit;
