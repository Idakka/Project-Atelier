import React from 'react';
import Modal from 'react-modal';
import { render, screen, cleanup } from '@testing-library/react';
import QuestionsAndAnswers from '../src/components/QA/QuestionsAndAnswers.jsx';
import QACardQuestions from '../src/components/QA/QACardQuestions.jsx';
import QACardAnswers from '../src/components/QA/QACardAnswers.jsx';
import QAAddAnswerModal from '../src/components/QA/QAAddAnswerModal.jsx';
import QAAddQuestionModal from '../src/components/QA/QAAddQuestionModal.jsx';
import { productInfoMock } from '../src/mockData/productInfoMock.js';
import axios from 'axios';

beforeEach(() => {
  render(<QuestionsAndAnswers productInfoMock={productInfoMock}/>);
  render(<QACardAnswers />);
  axios.get('/qa/questions/')
    .then(response => response)
    .catch(err => err);
});

afterEach(cleanup);

// Questions and Answers
test('Should render QuestionsAndAnswers div', () => {
  expect(screen.getByTestId('qa-div')).toBeInTheDocument();
});

test('Should render Search Bar', () => {
  expect(screen.getByTestId('search')).toBeInTheDocument();
});

test('Should render search questions', () => {
  expect(screen.getByTestId('qa-searchbar')).toBeInTheDocument();
});

test('Should render QuestionsAndAnswers component', () => {
  expect(screen.getByTestId('qa')).toBeInTheDocument();
});

test('Should render buttons to "More Answered Questions" and "Add Question" ', () => {
  expect(screen.getByTestId('qa-footer-buttons')).toBeInTheDocument();
});

// QA Card Question
test('Should render QACardQuestions component', () => {
  expect(screen.getByTestId('qa-questions')).toBeInTheDocument();
});

// QA Card Answers
test('Should render QACardAnswers component', () => {
  expect(screen.getByTestId('qa-div-card-answers')).toBeInTheDocument();
});

// QA Add Answer Modal
test('Should render QAAddAnswer component', () => {
  expect(screen.getByTestId('qa-questions')).toBeInTheDocument();
});

