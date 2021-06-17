import React from 'react';
import Carousel from './Carousel.jsx';

const RelatedItemsAndOutfit = ({ product, relatedProducts, productInfoOld, productStyles, relatedProductsOld, reviewsMeta }) => {
  return (
    <section
      id="related-items-and-outfit"
      className="related-items-and-outfit"
      data-testid="related-items-and-outfit"
    >
      <div id="related-items">
        {/* The Carousel will need to refactor its inputs to accommodate the correct set of data */}
        {/* It will take in a list of objects from top level state, e.g. iterate through related */}
        {/* and populate an array of those objects that the Carousel/Card can then use. */}
        <Carousel
          productInfoOld={productInfoOld}
          styles={productStyles}
          relatedProductsOld={relatedProductsOld}
          reviews={reviewsMeta}
          carouselType={'related'}
        />
      </div>
      <div id="your-outfit">
        <Carousel
          productInfoOld={productInfoOld}
          styles={productStyles}
          relatedProductsOld={relatedProductsOld}
          reviews={reviewsMeta}
          carouselType={'outfit'}
        />
      </div>
    </section>
  );
};

export default RelatedItemsAndOutfit;
