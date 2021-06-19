import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import RelatedItemsAndOutfit from '../src/components/RelatedItemsAndOutfit/RelatedItemsAndOutfit';
import currentProductMock from '../src/mockData/serverMock/currentProductMock';
import relatedProductsMock from '../src/mockData/serverMock/relatedProductsMock';

beforeEach(() => {
  render(<RelatedItemsAndOutfit
    product={currentProductMock}
    relatedProducts={currentProductMock.related.map(relId => relatedProductsMock[relId])}
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
