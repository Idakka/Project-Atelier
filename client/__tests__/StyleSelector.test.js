import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import StyleSelector from '../src/components/StyleSelector.jsx';

beforeEach(() => {
  render(<StyleSelector />);
});

afterEach(() => {
  cleanup();
})

test('StyleSelector renders', () => {
  expect(screen.getByTestId('style-selector')).toBeInTheDocument();
});
