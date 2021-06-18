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
          currentProduct={product}
          products={relatedProducts}
          carouselType={'related'}
        />
      </section>
      <section id="your-outfit" aria-labelledby="outfit-header">
        <Carousel
          products={relatedProducts}
          carouselType={'outfit'}
        />
      </section>
    </div>
  );
};

export default RelatedItemsAndOutfit;
