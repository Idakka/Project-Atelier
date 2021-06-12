import React from 'react';
import Modal from 'react-modal';
import { render, screen, cleanup } from '@testing-library/react';
import QuestionsAndAnswers from '../src/components/QA/QuestionsAndAnswers.jsx';
import QACardAnswers from '../src/components/QA/QACardAnswers.jsx';
import QACardQuestions from '../src/components/QA/QACardQuestions.jsx';

afterEach(cleanup);

test('Should render QuestionsAndAnswers component', () => {
  render(<QuestionsAndAnswers />);
  expect(QuestionsAndAnswers).toBeTruthy();
});