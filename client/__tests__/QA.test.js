import React from 'react';
import Modal from 'react-modal';
import { render, screen, cleanup } from '@testing-library/react';
import QuestionsAndAnswers from '../src/components/QuestionsAndAnswers';
import QACardAnswers from '../src/components/QACardAnswers';
import QACardQuestions from '../src/components/QACardQuestions';

afterEach(cleanup);

test('Should render QuestionsAndAnswers component', () => {
  render(<QuestionsAndAnswers />);
  expect(QuestionsAndAnswers).toBeTruthy();
});