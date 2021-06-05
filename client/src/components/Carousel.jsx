import React, { useCallback, useEffect, useState, createRef } from 'react';
import Card from './Card.jsx';
import axios from 'axios';

const Carousel = ({ productId, carouselType }) => {
  const [products, setProducts] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const slideWrapperRef = createRef();

  const cardWidth = 272;

  useEffect(() => {
    // if carouselType is related
    axios.get(`/products/${productId}/related`)
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch(err => console.log(err));
    // if carouselType is outfit
      // get all products saved in outfit and setProducts
  }, []);

  const scrollCarousel = useCallback((direction) => {
    const capacity = Math.floor(slideWrapperRef.current.clientWidth / cardWidth);
    // set farLeft to 0
    const farLeft = 0;
    // set farRight to length of products - capacity
    const farRight = products.length - capacity;
    const change = direction === 'left' ? -1 : 1;

    // get rid of scrolls if no longer needed
    // if going to be at far left
      // set to no
    // if not
      // set to yes
    setCanScrollLeft(scrollPosition + change !== farLeft);
    // if going to be at far right
      // set to no
    // if not
      // set to yes
    setCanScrollRight(scrollPosition + change !== farRight);

    // if direction is left and not at farLeft
    if (direction === 'left' && scrollPosition !== farLeft) {
      // subtract one from scroll position
      setScrollPosition(scrollPosition - 1);
    // if direction is right and not at farRight
    } else if (direction === 'right' && scrollPosition !== farRight) {
      // add one from scroll position
      setScrollPosition(scrollPosition + 1);
    }
  });

  return (
    <React.Fragment>
      <h3 className="carousel__title">{carouselType === 'related' ? 'Related Items' : 'Your Outfit'}</h3>
      <div className="carousel__wrapper">
        <div
          className="carousel__edge carousel__edge--left"
          style={{visibility: canScrollLeft ? 'visible' : 'hidden', opacity: canScrollLeft ? 1 : 0}}
        >
          <span className="material-icons" onClick={() => scrollCarousel('left')}>arrow_backward</span>
        </div>
        <div ref={slideWrapperRef} className="carousel__slide-wrapper">
          <div className="carousel" style={{ left: String(scrollPosition * -272) + 'px' }}>
            {products.map(product => (
              <Card key={product.id} product={product} cardType={carouselType} />
            ))}
          </div>
        </div>
        <div
          className="carousel__edge carousel__edge--right"
          style={{visibility: canScrollRight ? 'visible' : 'hidden', opacity: canScrollRight ? 1 : 0}}
        >
          <span className="material-icons" onClick={() => scrollCarousel('right')}>arrow_forward</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
