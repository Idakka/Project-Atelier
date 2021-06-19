import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Carousel from '../src/components/RelatedItemsAndOutfit/Carousel';
import currentProductMock from '../src/mockData/serverMock/currentProductMock';
import relatedProductsMock from '../src/mockData/serverMock/relatedProductsMock';

describe('Related Items Carousel', () => {
  beforeEach(() => {
    render(
      <Carousel
        currentProduct={currentProductMock}
        products={currentProductMock.related.map(relId => relatedProductsMock[relId])}
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
    expect(cardComponents.length).toBe(currentProductMock.related.length);
  });
});

describe('Outfit Carousel', () => {
  beforeEach(() => {
    render(
      <Carousel
        currentProduct={currentProductMock}
        products={currentProductMock.related.map(relId => relatedProductsMock[relId])}
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
