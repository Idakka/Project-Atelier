import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import ProductDetailPage from '../src/components/ProductDetailPage.jsx';

beforeEach(() => {
  var ProductDetailPageMock = new ProductDetailPage;
  render(<ProductDetailPage />);
  ProductDetailPageMock.hideModal();
});

afterEach(() => {
  cleanup();
});

test('When no buttons are clicked, the modal does not yet contain the example content.', () => {
  expect(screen.queryByTestId('review-upload-form')).not.toBeInTheDocument();
  expect(screen.queryByTestId('word-count')).not.toBeInTheDocument();
  expect(screen.queryByTestId('review-review-thumbnail-container')).not.toBeInTheDocument();
})

test('Clicking the "Add Review" reveals the modal, showing the review form.', () => {
  let theModal = screen.getByTestId('the_modal');
  fireEvent.click(screen.getByTestId('add-review-button'));
  expect(screen.queryByTestId('review-upload-form')).toBeInTheDocument();
  expect(theModal).toHaveStyle(`visibility: visible`);
  expect(screen.queryByTestId('review-summary')).toBeInTheDocument();
});

test('Clicking the "Add Review" reveals the modal with the WordCount and ReviewThumbnailContainer components.', () => {
  let theModal = screen.getByTestId('the_modal');
  fireEvent.click(screen.getByTestId('add-review-button'));
  expect(screen.queryByTestId('word-count')).toBeInTheDocument();
  expect(screen.queryByTestId('review-thumbnail-container')).toBeInTheDocument();
});