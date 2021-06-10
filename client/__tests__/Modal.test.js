import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import ProductDetailPage from '../src/components/ProductDetailPage.jsx';

beforeEach(() => {
  var pdp = new ProductDetailPage;
  render(<ProductDetailPage />);
  pdp.hideModal(); // This is a krufty hack twice over.
  // First, I was spinning my wheels getting the Product Detail Page to load the stylesheet in jest, so I'm just
  // forcing the page to start off hidden.
  // Second, notice how I made a Product Detail Page object, and then rendered a different instance? This only works
  // because the functions are working through the dom, not their own properties.
})

afterEach(() => {
  cleanup();
})

test('The modal starts as rendered but invisible', () => {
  let theModal = screen.getByTestId('the_modal');
  expect(theModal).toBeInTheDocument();
  expect(theModal).toHaveStyle(`visibility: hidden`);
});

test('When no buttons are clicked, the modal does not yet contain the example content.', () => {
  expect(screen.queryByTestId('example-modal-close-button')).not.toBeInTheDocument();
})

test('Clicking the star button reveals the modal, showing the example content page.', () => {
  let theModal = screen.getByTestId('the_modal');
  fireEvent.click(screen.getByTestId('add-to-bag-star-button'));
  expect(screen.queryByTestId('example-modal-close-button')).toBeInTheDocument();
  expect(theModal).toHaveStyle(`visibility: visible`);
});