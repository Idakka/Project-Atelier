import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import RelatedItemsAndOutfit from '../src/components/RelatedItemsAndOutfit/RelatedItemsAndOutfit';
import { productsMock, productInfoMock, productStylesMock, relatedProductsMock } from '../src/mockData/productInfoMock.js';
import { reviewsMock, reviewsMetaMock } from '../src/mockData/reviewsMock.js';

beforeEach(() => {
  render(<RelatedItemsAndOutfit
    productInfo={productInfoMock}
    productStyles={productStylesMock}
    relatedProducts={relatedProductsMock}
    reviewsMeta={reviewsMetaMock}
  />);
});

afterEach(() => {
  cleanup();
});

test('Should render RelatedItemsAndOutfit', () => {
  const RelatedItemsAndOutfitComponent = screen.getByTestId('related-items-and-outfit');
  expect(RelatedItemsAndOutfitComponent).toBeInTheDocument();
});

test('Should render two Carousels', () => {
  const CarouselComponents = screen.getAllByTestId(/carousel/);
  for (let i = 0; i < CarouselComponents.length; i++) {
    expect(CarouselComponents[i]).toBeInTheDocument();
  }
  expect(CarouselComponents.length).toBe(2);
});
