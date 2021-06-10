import React from 'react';
import Carousel from './Carousel.jsx';
import { productsMock, productInfoMock, productStylesMock, relatedProductsMock } from '../mockData/productInfoMock.js';
import { reviewsMock, reviewsMetaMock } from '../mockData/reviewsMock.js';

class RelatedItemsAndOutfit extends React.Component {
  // when using top level state, this will be a functional component that takes in
  // all details about the products via props

  constructor (props) {
    super(props);
    this.state = {
      productInfo: productInfoMock,
      productStyles: productStylesMock,
      relatedProducts: relatedProductsMock,
      reviewsMeta: reviewsMetaMock
    };
  }

  render() {
    return (
      <section
        id="related-items-and-outfit"
        className="related-items-and-outfit"
        data-testid="related-items-and-outfit"
      >
        <div id="related-items">
          <Carousel
            product={this.state.productInfo}
            styles={this.state.productStyles}
            related={this.state.relatedProducts}
            reviews={this.state.reviewsMeta}
            carouselType={'related'}
          />
        </div>
        <div id="your-outfit">
          <Carousel
            product={this.state.productInfo}
            styles={this.state.productStyles}
            related={this.state.relatedProducts}
            reviews={this.state.reviewsMeta}
            carouselType={'outfit'}
          />
        </div>
      </section>
    );
  }
}

export default RelatedItemsAndOutfit;
