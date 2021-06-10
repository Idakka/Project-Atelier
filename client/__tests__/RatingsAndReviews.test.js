import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import RatingsAndReviews from '../src/components/RatingsAndReviews.jsx';


beforeEach(() => {
  render(<RatingsAndReviews />);
});

afterEach(() => {
  cleanup();
});

test('Should render Ratings and Reviews', () => {
  expect(screen.getByTestId('ratings-main')).toBeInTheDocument();
});

test('Ratings and Reviews has two star-review', () => {
  expect(screen.getAllByTestId('star-review').length).toBe(2);
});