import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ImageGallery from '../src/components/ImageGallery.jsx';
import { productStylesMock } from '../src/mockData/productInfoMock.js';

beforeEach(() => {
  render(<ImageGallery productStyles={productStylesMock} />);
});

afterEach(() => {
  cleanup();
});

// Just check and make sure that the image gallery and its static subcomponents render.
test('it renders the ImageGallery', () => {
  expect(screen.getByTestId('image-gallery')).toBeInTheDocument();
});

test('The ImageGallery has an back-arrow', () => {
  expect(screen.getByTestId('ig-ba')).toBeInTheDocument();
});

test('The ImageGallery has an forward-arrow', () => {
  expect(screen.getByTestId('ig-fa')).toBeInTheDocument();
});

test('The ImageGallery has a thumbnail column', () => {
  expect(screen.getByTestId('ig-tc')).toBeInTheDocument();
});

