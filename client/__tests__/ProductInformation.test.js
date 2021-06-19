import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ProductInformation from '../src/components/Overview/ProductInformation.jsx';
import { productInfoMock, productStylesMock } from '../src/mockData/productInfoMock.js';
import { reviewsMetaMock } from '../src/mockData/reviewsMock.js';

beforeEach(() => {
  render(<ProductInformation productInfo={productInfoMock} productStyles={productStylesMock} reviewsMeta={reviewsMetaMock} />);
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
