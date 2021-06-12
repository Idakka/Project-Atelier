import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ReviewsList from '../src/components/ReviewsList.jsx';
import { reviewsMock } from '../src/mockData/reviewsMock.js';

beforeEach(() => {
  render(<ReviewsList reviews={reviewsMock.results}/>
  );
});

afterEach(() => {
  cleanup();
});

test('Should render ReviewsList', () => {
  expect(screen.getByTestId('reviews-list')).toBeInTheDocument();
});

test('ReviewsList has 1 or more reviews', () => {
  expect(screen.getAllByTestId('review-card').length).not.toBe(0);
});