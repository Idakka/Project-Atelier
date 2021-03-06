import React from 'react';
import Carousel from './Carousel.jsx';

const RelatedItemsAndOutfit = ({ top, product, relatedProducts, outfitProducts }) => {
  return (
    <div
      id="related-items-and-outfit"
      className="related-items-and-outfit"
      data-testid="related-items-and-outfit"
    >
      <section id="related-items" aria-labelledby="related-header">
        <h3 className="carousel__title" id="related-header">Related Items</h3>
        <Carousel
          top={top}
          currentProduct={product}
          products={relatedProducts}
          carouselType={'related'}
          onAction={(component) => top.showModal(component)}
        />
      </section>
      <section id="your-outfit" aria-labelledby="outfit-header">
        <h3 className="carousel__title" id="outfit-header">Your Outfit</h3>
        <Carousel
          top={top}
          currentProduct={product}
          products={outfitProducts}
          carouselType={'outfit'}
          onAction={(changeType, productId) => top.onOutfitChange(changeType, productId)}
        />
      </section>
    </div>
  );
};

export default RelatedItemsAndOutfit;
