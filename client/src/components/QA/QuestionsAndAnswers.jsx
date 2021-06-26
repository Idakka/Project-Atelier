import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QACardQuestions from './QACardQuestions.jsx';

const QuestionsAndAnswers = ({questionsInfo, productInfo}) => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [product, setProduct] = useState('');
  // // questions array for current product
  const [questions, setQuestions] = useState([]);
  // variables to take in product info
  const [productName, setProductName] = useState('');

  useEffect(() => {
    setProductName(productInfo);
    setQuestions(questionsInfo);
    axios.get('qa/questions/')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(err => err);
    // sorts questions by helpfulness
    questions.sort((a, b) => {
      return b.question_helpfulness - a.question_helpfulness;
    });
  }, []);

  return (
    <div data-testid="qa-div" id="qa">
      <h1 id="qa-header">QUESTIONS AND ANSWERS</h1>
      <QACardQuestions questionsInfo={questions} productName={productName}/>
      <p></p>
    </div>

  );
};

export default QuestionsAndAnswers;

