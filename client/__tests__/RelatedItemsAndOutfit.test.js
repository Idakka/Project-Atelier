import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import RelatedItemsAndOutfit from '../src/components/RelatedItemsAndOutfit';

afterEach(() => {
  cleanup();
});

test('Should render RelatedItemsAndOutfit', () => {
  render(<RelatedItemsAndOutfit />);
  const RelatedItemsAndOutfitComponent = screen.getByTestId('related-items-and-outfit');
  expect(RelatedItemsAndOutfitComponent).toBeInTheDocument();
});

test('Should render two Carousels', () => {
  render(<RelatedItemsAndOutfit />);
  const CarouselComponents = screen.getAllByTestId(/carousel/);
  for (let i = 0; i < CarouselComponents.length; i++) {
    expect(CarouselComponents[i]).toBeInTheDocument();
  }
  expect(CarouselComponents.length).toBe(2);
});
