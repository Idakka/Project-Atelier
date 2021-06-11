import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ProductInformation from '../src/components/ProductInformation.jsx';
import { productInfoMock } from '../src/mockData/productInfoMock.js';

beforeEach(() => {
  render(<ProductInformation productInfo={productInfoMock} />);
});

afterEach(() => {
  cleanup();
});

test('Product Information renders', () => {
  expect(screen.getByTestId('product-information')).toBeInTheDocument();
});

test('Product Information has a star-review', () => {
  expect(screen.getByTestId('star-review')).toBeInTheDocument();
});
