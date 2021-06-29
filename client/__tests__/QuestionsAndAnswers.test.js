import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import QuestionsAndAnswers from '../src/components/QA/QuestionsAndAnswers.jsx';
import QACardQuestions from '../src/components/QA/QACardQuestions.jsx';
import QACardAnswers from '../src/components/QA/QACardAnswers.jsx';
import QAAddAnswerModal from '../src/components/QA/QAAddAnswerModal.jsx';
import QAAddQuestionModal from '../src/components/QA/QAAddQuestionModal.jsx';
import { productInfoMock } from '../src/mockData/productInfoMock.js';
import { questionsMock, answersMock } from '../src/mockData/questionsMock.js';
import axios from 'axios';

beforeEach(() => {
  render(<QuestionsAndAnswers productInfo={productInfoMock} questionsInfo={questionsMock}/>,
    <QACardQuestions productInfo={productInfoMock} questionsInfo={questionsMock}/>, <QACardAnswers />
  );
  // axios.get('/qa/questions/')
  //   .then(response => response)
  //   .catch(err => err);
});

afterEach(cleanup);

// Questions and Answers
test('Should render QuestionsAndAnswers div', () => {
  expect(screen.getByTestId('qa-div')).toBeInTheDocument();
});

test('Product name should be Heir Force Ones', () => {
  var productName = productInfoMock.name;
  expect(productName).toBe('Heir Force Ones');
});

test('Should render Search Bar', () => {
  expect(screen.getByTestId('search')).toBeInTheDocument();
});

// QA Card Questions
test('Should render questions component ', () => {
  expect(screen.getByTestId('qa-questions')).toBeInTheDocument();
});

test('Should render search questions', () => {
  expect(screen.getByTestId('qa-searchbar')).toBeInTheDocument();
});

test('Should contain scrollable questions ', () => {
  expect(screen.getByTestId('qa-scroll')).toBeInTheDocument();
});

test('Should render buttons to "More Answered Questions" and "Add Question" ', () => {
  expect(screen.getByTestId('qa-footer-buttons')).toBeInTheDocument();
});

test('Should render load more answers section ', () => {
  expect(screen.getAllByTestId('qa-load-more').length).not.toBe(0);
});

test('Should render Add Answer Modal ', () => {
  expect(screen.getByTestId('qa-more')).toBeInTheDocument();
});


