import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ClickTracker from '../src/components/ClickTracker.jsx';
import StarReview from '../src/components/StarReview.jsx';

beforeEach(() => {
  const StarReviewWithTracking = ClickTracker(StarReview);
  render(<StarReviewWithTracking rating={5} />);
});

afterEach(() => {
  cleanup();
});

test('Should return a function upon wrapping', () => {
  const StarReviewWithTracking = ClickTracker(StarReview);
  expect(StarReviewWithTracking).toBeInstanceOf(Function);
});

test('Returned component should render a component', () => {
  const renderedComponentWithWrapper = screen.getByTestId('click-tracker');
  expect(renderedComponentWithWrapper).toBeInTheDocument();
});
