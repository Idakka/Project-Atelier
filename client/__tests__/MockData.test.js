import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ProductDetailPage from '../src/components/ProductDetailPage.jsx';
import { productInfoMock, relatedProductsMock, productStylesMock, productsMock } from '../src/mockData/productInfoMock.js';
import { reviewsMock, reviewsMetaMock } from '../src/mockData/reviewsMock.js';
import { questionsMock, answersMock } from '../src/mockData/questionsMock.js';
import { cartMock } from '../src/mockData/cartMock.js';

beforeEach(() => {
  render(<ProductDetailPage />);
});

afterEach(() => {
  cleanup();
});

test('Should render Product Detail Page', () => {
  expect(<ProductDetailPage />).toBeTruthy();
});

test('Should load the mock data for the products', () => {
  expect(Array.isArray(productsMock)).toBe(true);
  expect(typeof productInfoMock).toBe('object');
  expect(Array.isArray(relatedProductsMock)).toBe(true);
  expect(typeof productStylesMock).toBe('object');
});

test('Should load the mock data for the cart', () => {
  expect(Array.isArray(cartMock)).toBe(true);
});

test('Should load the mock data for the questions and answers', () => {
  expect(typeof questionsMock).toBe('object');
  expect(typeof answersMock).toBe('object');
});

test('Should load the mock data for the reviews', () => {
  expect(typeof reviewsMock).toBe('object');
  expect(typeof reviewsMetaMock).toBe('object');
});