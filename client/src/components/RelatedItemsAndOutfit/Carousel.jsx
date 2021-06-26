import React, { useCallback, useEffect, useState, createRef } from 'react';
import Card from './Card.jsx';
import AddToOutfitCard from './AddToOutfitCard.jsx';
import NoRelatedProductsCard from './NoRelatedProductsCard.jsx';
import debounce from '../../scripts/debounce';
import calculateRating from '../../scripts/calculateRating';

class Carousel extends React.Component {
  constructor(props) {
    super(props); // ({ top, currentProduct, products, carouselType, onAction })
    this.state = {
      // Product Info
      products: this.props.products,
      numberOfCards: this.getNumberOfCards(),
      productCards: this.createProductCards(),
      // Scroll Info
      screenWidth: 0,
      scrollPosition: 0,
      canScrollLeft: false,
      canScrollRight: false,
      cardWidth: 272, // px
      capacity: 0,
      farLeft: 0,
      farRight: 0,
    };
    this.innerWrapperRef = createRef();
  }

  getNumberOfCards() {
    return this.props.carouselType === 'outfit' ? this.props.products.length + 1 : this.props.products.length;
  }

  createProductCards() {
    return this.props.products.map(product => {
      return {
        ...product,
        rating: calculateRating(product.reviewsMeta.ratings),
        defaultStyle: product.styles.filter(style => style['default?'])[0] || product.styles[0],
      };
    });
  }

  componentDidMount() {
    this.scrollAndSetCarousel();
    // Set window listener to set scrolling on resize
    const debouncedScrollAndSetCarousel = debounce(() => this.scrollAndSetCarousel());
    window.addEventListener('resize', () => {
      this.setState({
        screenWidth: this.innerWrapperRef.current.scrollWidth,
        farRight: Math.max(this.state.numberOfCards - capacity, 0), // number of times user can scroll to the right
      }, () => console.log(this.state.productCards));
      debouncedScrollAndSetCarousel();
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props !== prevProps) {
      this.setState({
        products: this.props.products,
        numberOfCards: this.getNumberOfCards(),
        productCards: this.createProductCards(),
      });
      this.scrollAndSetCarousel();
    }
  }

  // When no vars are passed in, this will just set the state re: scrolling the Carousel
  scrollAndSetCarousel(change = 0, numberOfProducts = this.state.numberOfCards) {
    // If you can't scroll in a direction, remove the button
    const capacity = Math.floor(this.state.screenWidth / this.state.cardWidth);
    const farRight = Math.max(this.state.numberOfCards - capacity, 0);
    this.setState({
      canScrollLeft: this.state.scrollPosition > this.state.farLeft,
      canScrollRight: this.state.scrollPosition < farRight,
      screenWidth: this.state.screenWidth,
      capacity,
      farRight,
    }, () => {
      // If you are not at either edge, scroll over one card
      if ((change === -1 && this.state.scrollPosition > this.state.farLeft) || (change === 1 && this.state.scrollPosition < this.state.farRight)) {
        this.setState({
          canScrollLeft: this.state.scrollPosition + change > this.state.farLeft,
          canScrollRight: this.state.scrollPosition + change < this.state.farRight,
          scrollPosition: this.state.scrollPosition + change
        });
      }
    });
  }

  render() {
    return (
      <div className="carousel__wrapper">
        <div
          className="carousel__edge carousel__edge--left"
          style={{
            visibility: this.state.canScrollLeft ? 'visible' : 'hidden',
            opacity: this.state.canScrollLeft ? 1 : 0,
            pointerEvents: this.state.canScrollLeft ? 'auto' : 'none'
          }}
        >
          <span
            className="material-icons"
            onClick={() => this.scrollAndSetCarousel(-1)}
          >
            arrow_backward
          </span>
        </div>
        <div ref={this.innerWrapperRef} className="carousel__slide-wrapper">
          <div
            className="carousel"
            style={{ left: String(this.state.scrollPosition * -272) + 'px' }}
            data-testid={`carousel--${this.props.carouselType}`}
          >
            {this.props.carouselType === 'related' && this.state.products.length === 0 && (
              <NoRelatedProductsCard />
            )}
            {this.props.carouselType === 'outfit' && (
              <AddToOutfitCard
                currentProduct={this.props.currentProduct}
                onAction={this.props.onAction}
              />
            )}
            {this.state.productCards.map((productCard, index) => (
              <Card
                top={this.props.top}
                key={index}
                product={productCard}
                cardType={this.props.carouselType}
                onAction={this.props.onAction}
              />
            ))}
          </div>
        </div>
        <div
          className="carousel__edge carousel__edge--right"
          style={{
            visibility: this.state.canScrollRight ? 'visible' : 'hidden',
            opacity: this.state.canScrollRight ? 1 : 0,
            pointerEvents: this.state.canScrollRight ? 'auto' : 'none'
          }}
        >
          <span
            className="material-icons"
            onClick={() => this.scrollAndSetCarousel(1)}
          >
            arrow_forward
          </span>
        </div>
      </div>
    );
  }
}

export default Carousel;
