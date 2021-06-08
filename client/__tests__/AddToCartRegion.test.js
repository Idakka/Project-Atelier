import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import AddToCartRegion from '../src/components/AddToCartRegion.jsx';

beforeEach(() => {
  render(<AddToCartRegion />);
});

afterEach(() => {
  cleanup();
});

test('The Add to Cart region of the product detail renders', () => {
  expect(screen.getByTestId('add-to-cart-region')).toBeInTheDocument();
});

