import React from 'react';
import Modal from 'react-modal';
import { render, screen, cleanup } from '@testing-library/react';
import QuestionsAndAnswers from '../src/components/QA/QuestionsAndAnswers.jsx';
import QACardQuestions from '../src/components/QA/QACardQuestions.jsx';
import QACardAnswers from '../src/components/QA/QACardAnswers.jsx';
import QAAddAnswerModal from '../src/components/QA/QAAddAnswerModal.jsx';
import QAAddQuestionModal from '../src/components/QA/QAAddQuestionModal.jsx';

beforeEach(() => {
  render(<QuestionsAndAnswers />);
});

afterEach(cleanup);

test('Should render QuestionsAndAnswers component', () => {
  expect(screen.getByTestId('qa')).toBeInTheDocument();
});

xtest('Should render QACardQuestions component', () => {
  render(<QACardQuestions />);
  const questions = [];
});

test('Should render search bar to search questions', () => {
  expect(screen.getByTestId('qa-searchbar')).toBeInTheDocument();
});

test('Should render buttons to "More Answered Questions" and "Add Question" ', () => {
  expect(screen.getByTestId('qa-footer-buttons')).toBeInTheDocument();
});


