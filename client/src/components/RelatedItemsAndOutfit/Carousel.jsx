import React, { useCallback, useEffect, useState, createRef } from 'react';
import Card from './Card.jsx';
import AddToOutfitCard from './AddToOutfitCard.jsx';
import NoRelatedProductsCard from './NoRelatedProductsCard.jsx';
import calculateRating from '../../scripts/calculateRating';

class Carousel extends React.Component {
  constructor(props) {
    super(props); // ({ top, currentProduct, products, carouselType, onAction })
    const screenWidth = window.innerWidth;
    const cardWidth = 272; // px
    const capacity = Math.floor(screenWidth / cardWidth); // number of cards that can fit across
    this.state = {
      products: this.props.products,
      productCards: [],
      // Scroll Info
      screenWidth,
      scrollPosition: 0,
      canScrollLeft: false,
      canScrollRight: false,
      cardWidth,
      capacity,
      farLeft: 0,
      farRight: Math.max(this.props.products.length - capacity, 0), // number of scrolls you can make
    };
    this.slideWrapperRef = createRef();
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

  componentWillMount() {
    this.scrollAndSetCarousel();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props !== prevProps) {
      this.setState({
        products: this.props.products,
        productCards: this.createProductCards(),
        farRight: Math.max(this.props.products.length - this.state.capacity, 0),
        screenWidth: window.innerWidth,
      });
      this.scrollAndSetCarousel();
    }
  }

  scrollAndSetCarousel(change = 0, numberOfProducts = this.state.products.length) {
    // If you can't scroll in a direction, remove the button
    this.setState({
      canScrollLeft: this.state.scrollPosition + change > this.state.farLeft,
      canScrollRight: this.state.scrollPosition + change < this.state.farRight,
    });

    // If you are not at the edge, then scroll one more card over
    if ((change === -1 && this.state.scrollPosition !== this.state.farLeft) || (change === 1 && this.state.scrollPosition !== this.state.farRight)) {
      this.setState({
        scrollPosition: this.state.scrollPosition + change
      });
    }
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
        <div ref={this.slideWrapperRef} className="carousel__slide-wrapper">
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
                currentProduct={this.state.currentProduct}
                onAction={this.props.onAction}
              />
            )}
            {this.state.productCards.map((productCard, index) => (
              <Card
                top={top}
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
