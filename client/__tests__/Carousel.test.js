import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Carousel from '../src/components/RelatedItemsAndOutfit/Carousel';
import { productsMock, productInfoMock, productStylesMock, relatedProductsMock } from '../src/mockData/productInfoMock.js';
import { reviewsMock, reviewsMetaMock } from '../src/mockData/reviewsMock.js';

describe('Related Items Carousel', () => {
  beforeEach(() => {
    render(
      <Carousel
        product={productInfoMock}
        styles={productStylesMock}
        related={relatedProductsMock}
        reviews={reviewsMetaMock}
        carouselType={'related'}
      />
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('Should render Related Items Carousel', () => {
    const relatedItemsCarousel = screen.getByTestId('carousel--related');
    expect(relatedItemsCarousel).toBeInTheDocument();
  });

  test('Should render as many Cards as there are related products', () => {
    const cardComponents = screen.getAllByTestId('card--related');
    expect(cardComponents.length).toBe(relatedProductsMock.length);
  });
});

describe('Outfit Carousel', () => {
  beforeEach(() => {
    render(
      <Carousel
        product={productInfoMock}
        styles={productStylesMock}
        related={relatedProductsMock}
        reviews={reviewsMetaMock}
        carouselType={'outfit'}
      />
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('Should render Outfit Carousel', () => {
    const OutfitCarousel = screen.getByTestId('carousel--outfit');
    expect(OutfitCarousel).toBeInTheDocument();
  });

  // Test for items in outfit once we have the outfit scheme set up
});
