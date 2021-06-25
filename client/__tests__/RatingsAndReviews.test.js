import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import RatingsAndReviews from '../src/components/RatingsAndReviews/RatingsAndReviews.jsx';
import ProductDetailPage from '../src/components/ProductDetailPage.jsx';
import { reviewsMock, reviewsMetaMock } from '../src/mockData/reviewsMock.js';

var onChangeFileHandler = (event) => {
  this.setState({
    selectedImageFile: event.target.files[0],
    fileLoaded: 0
  });
}

var onClickUploadHandler = () => {
  const data = new FormData();
  data.append('file', this.state.selectedImageFile);
  axios.post(`http://localhost:${port}/upload`, data)
    .then(response => {
      console.log('successful upload: ', response);
    });
}

beforeEach(() => {
  var ProductDetailPageMock = new ProductDetailPage;
  render(<RatingsAndReviews
    top={ProductDetailPageMock}
    onChangeFileHandler={ProductDetailPageMock.onChangeFileHandler}
    onClickUploadHandler={ProductDetailPageMock.onClickUploadHandler}
    productId={reviewsMock.product}
    reviews={reviewsMock.results}
    reviewsMeta={reviewsMetaMock}
  />);
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