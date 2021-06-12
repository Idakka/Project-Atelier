import React, { useCallback, useEffect, useState, createRef } from 'react';
import Card from './Card.jsx';

const Carousel = ({ product, styles, related, reviews, carouselType }) => {
  const [productCards, setProductCards] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const slideWrapperRef = createRef();

  const scrollCarousel = useCallback((change, containerWidth, numberOfProducts = productCards.length) => {
    // Get boundary variables for scroll calibration
    const cardWidth = 272;
    const capacity = Math.floor(containerWidth / cardWidth);
    const farLeft = 0;
    const farRight = Math.max(numberOfProducts - capacity, 0);

    // If you can't scroll in a direction, remove the button
    setCanScrollLeft(scrollPosition + change !== farLeft);
    setCanScrollRight(scrollPosition + change !== farRight);

    // If you are not at the edge, then scroll one more card over
    if ((change === -1 && scrollPosition !== farLeft) || (change === 1 && scrollPosition !== farRight)) {
      setScrollPosition(scrollPosition + change);
    }
  });

  useEffect(() => {
    // this is where each card's information object will be created. Per product:
    // 1. Product information
    // 2. Review data
    // 3. Default style picture URL
    const createdProductCards = [];
    related.forEach(rel => {
      let totalRating = 0;
      let numberOfReviews = 0;
      for (const ratingNumber in reviews.ratings) {
        numberOfReviews += Number(reviews.ratings[ratingNumber]);
        totalRating += ratingNumber * Number(reviews.ratings[ratingNumber]);
      }
      const defaultStyle = styles.results.filter(style => style['default?'])[0];
      const productCardInformation = {
        ...product,
        rating: totalRating / numberOfReviews,
        style: defaultStyle
      };
      createdProductCards.push(productCardInformation);
    });
    setProductCards(createdProductCards);

    // Have to pass in window width as first render has not occurred and number
    // of products since setProducts is async
    // qqq Add an OR clause for when container has maxwidth and add a way for
    // the browser to adjust based on browser size
    scrollCarousel(0, window.innerWidth, related.length);
  }, []);

  return (
    <React.Fragment>
      <h3 className="carousel__title">{carouselType === 'related' ? 'Related Items' : 'Your Outfit'}</h3>
      <div className="carousel__wrapper">
        <div
          className="carousel__edge carousel__edge--left"
          style={{visibility: canScrollLeft ? 'visible' : 'hidden', opacity: canScrollLeft ? 1 : 0}}
        >
          <span
            className="material-icons"
            onClick={() => scrollCarousel(-1, slideWrapperRef.current.clientWidth)}
          >
            arrow_backward
          </span>
        </div>
        <div ref={slideWrapperRef} className="carousel__slide-wrapper">
          <div
            className="carousel"
            style={{ left: String(scrollPosition * -272) + 'px' }}
            data-testid={`carousel--${carouselType}`}
          >
            {productCards.map((productCard, index) => (
              <Card
                key={index}
                product={productCard}
                cardType={carouselType}
              />
            ))}
          </div>
        </div>
        <div
          className="carousel__edge carousel__edge--right"
          style={{visibility: canScrollRight ? 'visible' : 'hidden', opacity: canScrollRight ? 1 : 0}}
        >
          <span
            className="material-icons"
            onClick={() => scrollCarousel(1, slideWrapperRef.current.clientWidth)}
          >
            arrow_forward
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Carousel;