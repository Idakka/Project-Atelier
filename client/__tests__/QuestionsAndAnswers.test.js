import React from 'react';
import Modal from 'react-modal';
import { render, screen, cleanup } from '@testing-library/react';
import QuestionsAndAnswers from '../src/components/QA/QuestionsAndAnswers.jsx';
import QACardQuestions from '../src/components/QA/QACardQuestions.jsx';
import QACardAnswers from '../src/components/QA/QACardAnswers.jsx';
import QAAddAnswerModal from '../src/components/QA/QAAddAnswerModal.jsx';
import QAAddQuestionModal from '../src/components/QA/QAAddQuestionModal.jsx';
import { productInfoMock } from '../src/mockData/productInfoMock.js';

beforeEach(() => {
  render(<QuestionsAndAnswers productInfoMock={productInfoMock}/>);
});

afterEach(cleanup);

test('Should render QuestionsAndAnswers div', () => {
  expect(screen.getByTestId('qa-div')).toBeInTheDocument();
});

test('Should render Search Bar', () => {
  expect(screen.getByTestId('search')).toBeInTheDocument();
});

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

test('Should QAAddQuestionModal button', () => {
  expect(screen.getByTestId('qa-more')).toBeInTheDocument();
});

test('Should render buttons to "More Answered Questions" and "Add Question" ', () => {
  expect(screen.getByTestId('qa-footer-buttons')).toBeInTheDocument();
});


