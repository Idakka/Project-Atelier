import React from 'react';
import Modal from 'react-modal';
import { render, cleanup } from '@testing-library/react';
import QuestionsAndAnswers from '../src/components/QuestionsAndAnswers';

afterEach(cleanup);

test('Should render QuestionsAndAnswers component', () => {
  render(<QuestionsAndAnswers />);
  expect(QuestionsAndAnswers).toBeTruthy();
});