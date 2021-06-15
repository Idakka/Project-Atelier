import React from 'react';
import Carousel from './Carousel.jsx';

class RelatedItemsAndOutfit extends React.Component {
  // when using top level state, this will be a functional component that takes in
  // all details about the products via props

  constructor (props) {
    super(props);
    this.state = {
      productInfo: this.props.productInfo,
      productStyles: this.props.productStyles,
      relatedProducts: this.props.relatedProducts,
      reviewsMeta: this.props.reviewsMeta
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
