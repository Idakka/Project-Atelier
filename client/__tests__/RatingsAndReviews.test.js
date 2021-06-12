import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import RatingsAndReviews from '../src/components/RatingsAndReviews.jsx';
import { reviewsMock, reviewsMetaMock } from '../src/mockData/reviewsMock.js';

beforeEach(() => {
  render(<RatingsAndReviews productId={reviewsMock.product} reviews={reviewsMock.results} reviewsMeta={reviewsMetaMock}/>);
});

afterEach(() => {
  cleanup();
});

test('Should render Ratings and Reviews', () => {
  expect(screen.getByTestId('ratings-main')).toBeInTheDocument();
});

test('Ratings and Reviews has more than one star-review', () => {
  expect(screen.getAllByTestId('star-review').length).not.toBe(0);
});