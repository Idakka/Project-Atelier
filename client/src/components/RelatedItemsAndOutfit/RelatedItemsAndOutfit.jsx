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
        <h3 className="carousel__title" id="related-header">Related Items</h3>
        <Carousel
          currentProduct={product}
          products={relatedProducts}
          carouselType={'related'}
        />
      </section>
      <section id="your-outfit" aria-labelledby="outfit-header">
        <h3 className="carousel__title" id="outfit-header">Your Outfit</h3>
        <Carousel
          products={relatedProducts}
          carouselType={'outfit'}
        />
      </section>
    </div>
  );
};

export default RelatedItemsAndOutfit;
