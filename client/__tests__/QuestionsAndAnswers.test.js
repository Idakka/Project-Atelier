import React from 'react';
import Modal from 'react-modal';
import { render, screen, cleanup } from '@testing-library/react';
import QuestionsAndAnswers from '../src/components/QA/QuestionsAndAnswers.jsx';
import QACardQuestions from '../src/components/QA/QACardQuestions.jsx';
import QACardAnswers from '../src/components/QA/QACardAnswers.jsx';
import QAAddAnswerModal from '../src/components/QA/QAAddAnswerModal.jsx';
import QAAddQuestionModal from '../src/components/QA/QAAddQuestionModal.jsx';
import { productInfoMock } from '../src/mockData/productInfoMock.js';
import { questionsMock } from '../src/mockData/questionsMock.js';
import axios from 'axios';


beforeEach(() => {
  render(<QuestionsAndAnswers productName={productInfoMock.name} questions={questionsMock.results}/>,
    <QACardQuestions productName={productInfoMock.name} questions={questionsMock.results}/>,
    console.log('sample', questionsMock.results[0].answers)

    // <QACardAnswers />

    );
  // console.log('questions', questionsMock.results[0]);
  // console.log('answers', questionsMock.results[0].answers);
  // console.log('product', productInfoMock.name);

  // render(<QACardAnswers />);
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

test('Should render search questions', () => {
  expect(screen.getByTestId('qa-searchbar')).toBeInTheDocument();
});

test('Should render buttons to "More Answered Questions" and "Add Question" ', () => {
  expect(screen.getByTestId('qa-footer-buttons')).toBeInTheDocument();
});

test('Questions array should be longer than 1 ', () => {
  var questions = questionsMock.results;
  expect(Array.isArray(questions)).toBe(true);
  expect(questions.length).toBeGreaterThan(1);
});

// QA Card Question
test('Should render QACardQuestions component', () => {
  expect(screen.getByTestId('qa-questions')).toBeInTheDocument();
});

// QA Card Answers
test('Should render QACardAnswers component', () => {

  expect(screen.getByText('qa-card-sample')).toBeInTheDocument();

});

// QA Add Answer Modal
xtest('Should render QAAddAnswer component', () => {
  expect(screen.getByTestId('qa-show-answers')).toBeInTheDocument();
});

