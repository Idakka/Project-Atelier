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

test('renders react-modal', () => {
  expect(screen.getByTestId('the_modal')).toBeInTheDocument();
});

test('When no buttons are clicked, the modal does not yet contain the example content.', () => {
  expect(screen.queryByTestId('review-upload-form')).not.toBeInTheDocument();
})

test('Clicking the "Add Review" reveals the modal, showing the review form.', () => {
  let theModal = screen.getByTestId('the_modal');
  fireEvent.click(screen.getByTestId('add-review-button'));
  expect(screen.queryByTestId('review-upload-form')).toBeInTheDocument();
  expect(theModal).toHaveStyle(`visibility: visible`);
});