import React, { useCallback, useEffect, useState, createRef } from 'react';
import Card from './Card.jsx';
import axios from 'axios';

const Carousel = ({ productId, carouselType }) => {
  const [products, setProducts] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const slideWrapperRef = createRef();

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
    // Get boundary variables for scroll calibration
    const cardWidth = 272;
    const capacity = Math.floor(slideWrapperRef.current.clientWidth / cardWidth);
    const farLeft = 0;
    const farRight = products.length - capacity;
    const change = direction === 'left' ? -1 : 1;

    // If you can't scroll in a direction, remove the button
    setCanScrollLeft(scrollPosition + change !== farLeft);
    setCanScrollRight(scrollPosition + change !== farRight);

    // If you are not at the edge, then scroll one more card over
    if (direction === 'left' && scrollPosition !== farLeft) {
      setScrollPosition(scrollPosition - 1);
    } else if (direction === 'right' && scrollPosition !== farRight) {
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
