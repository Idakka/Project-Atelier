import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ProductDetailPage from '../src/components/ProductDetailPage.jsx';

beforeEach(() => {
  render(<ProductDetailPage />);
});

afterEach(() => {
  cleanup();
});

test('The Add to Cart region of the product detail renders', () => {
  expect(screen.getByTestId('add-to-cart-region')).toBeInTheDocument();
});

