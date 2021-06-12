import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
// import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// * enzyme only supports up to react ^16.4.0-0, and the current dependency is 17.x
// TODO: investigate how to replace enzyme functionality
import RatingsAndReviews from '../src/components/RatingsAndReviews/RatingsAndReviews.jsx';
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

test('Ratings and Reviews has 2 review cards on load', () => {
  expect(screen.getAllByTestId('review-card').length).toBe(2);
});

test('Ratings and Reviews has a rating-left element', () => {
  expect(screen.getByTestId('rating-left')).toBeInTheDocument();
});

// test('Ratings and Reviews has 4 review cards after pressing button for "More Reviews"', () => {
//   var page = <RatingsAndReviews productId={reviewsMock.product} reviews={reviewsMock.results} reviewsMeta={reviewsMetaMock}/>;

//   pageMounted = shallow(page);

//   const button = pageMounted.find('#rnr-button');
//   expect(button.length).toBe(1); // It finds it
//   button.simulate('click');

//   setReviewsToShowLength(reviewsToShowLength + 2);
//   setReviewsToShow(_reviews.slice(0, reviewsToShowLength));
//   expect(screen.getAllByTestId('review-card').length).toBe(2);
// });