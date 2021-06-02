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

test('Should render 5 full stars on a 5', () => {
  render(<StarReview rating={5} />);
  const StarReviewComponent = screen.getByTestId('star-review');
  const numberOfFullStars = screen.getAllByAltText('Full star');
  expect(numberOfFullStars.length).toBe(5);
});

test('Should render 2 full stars and 3 empty stars on a 2', () => {
  render(<StarReview rating={2} />);
  const StarReviewComponent = screen.getByTestId('star-review');
  const numberOfFullStars = screen.getAllByAltText('Full star');
  const numberOfEmptyStars = screen.getAllByAltText('Empty star');
  expect(numberOfFullStars.length).toBe(2);
  expect(numberOfEmptyStars.length).toBe(3);
});

test('Should render 1 full star, 1 half star and 3 empty stars on a 1.5', () => {
  render(<StarReview rating={1.5} />);
  const StarReviewComponent = screen.getByTestId('star-review');
  const numberOfFullStars = screen.getAllByAltText('Full star');
  const numberOfHalfStars = screen.getAllByAltText('Half star');
  const numberOfEmptyStars = screen.getAllByAltText('Empty star');
  expect(numberOfFullStars.length).toBe(1);
  expect(numberOfHalfStars.length).toBe(1);
  expect(numberOfEmptyStars.length).toBe(3);
});

test('Should render 1 full star, 1 three quarter star and 3 empty stars on a 1.9', () => {
  render(<StarReview rating={1.9} />);
  const StarReviewComponent = screen.getByTestId('star-review');
  const numberOfFullStars = screen.getAllByAltText('Full star');
  const numberOfHalfStars = screen.getAllByAltText('Three quarter star');
  const numberOfEmptyStars = screen.getAllByAltText('Empty star');
  expect(numberOfFullStars.length).toBe(1);
  expect(numberOfHalfStars.length).toBe(1);
  expect(numberOfEmptyStars.length).toBe(3);
});

test('Should render 1 full star, 3 empty stars and 1 quarter star on a 1.4', () => {
  render(<StarReview rating={1.4} />);
  const StarReviewComponent = screen.getByTestId('star-review');
  const numberOfFullStars = screen.getAllByAltText('Full star');
  const numberOfEmptyStars = screen.getAllByAltText('Empty star');
  const numberOfQuarterStars = screen.getAllByAltText('Quarter star');
  expect(numberOfFullStars.length).toBe(1);
  expect(numberOfEmptyStars.length).toBe(3);
  expect(numberOfQuarterStars.length).toBe(1);
});

test('Should render 1 full star, 0 half stars and 4 empty stars on a 1.2', () => {
  render(<StarReview rating={1.2} />);
  const StarReviewComponent = screen.getByTestId('star-review');
  const numberOfFullStars = screen.getAllByAltText('Full star');
  const numberOfEmptyStars = screen.getAllByAltText('Empty star');
  expect(numberOfFullStars.length).toBe(1);
  expect(numberOfEmptyStars.length).toBe(4);
});
