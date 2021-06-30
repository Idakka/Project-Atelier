import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ProductDetailPage from '../src/components/ProductDetailPage.jsx';

beforeEach(() => {
  render(<ProductDetailPage />);
});

afterEach(() => {
  cleanup();
});

test('StyleSelector renders', () => {
  expect(screen.getByTestId('style-selector')).toBeInTheDocument();
});
