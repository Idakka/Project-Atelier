import React from 'react';
import Carousel from './Carousel.jsx';

const RelatedItemsAndOutfit = ({ product, relatedProducts }) => {
  return (
    <div
      id="related-items-and-outfit"
      className="related-items-and-outfit"
      data-testid="related-items-and-outfit"
    >
      <section id="related-items" aria-labelledby="related-header">
        <Carousel
          product={product}
          relatedProducts={relatedProducts}
          carouselType={'related'}
        />
      </section>
      <section id="your-outfit" aria-labelledby="outfit-header">
        <Carousel
          product={product}
          relatedProducts={relatedProducts}
          carouselType={'outfit'}
        />
      </section>
    </div>
  );
};

export default RelatedItemsAndOutfit;
