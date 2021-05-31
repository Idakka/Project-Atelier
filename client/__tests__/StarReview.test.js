import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import StarReview from '../src/components/StarReview';

afterEach(() => {
  cleanup();
});

test('Should render StarReview component', () => {
  render(<StarReview rating={3} />);
  const StarReviewComponent = screen.getByTestId('star-review');
  expect(StarReviewComponent).toBeInTheDocument();
});
