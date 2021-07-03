import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QACardQuestions from './QACardQuestions.jsx';

const QuestionsAndAnswers = ({ questionsInfo, productInfo, currentProductId, productInfoAPI }) => {
  const [product, setProduct] = useState('');
  // // questions array for current product
  const [questions, setQuestions] = useState([]);
  // variables to take in product info
  const [productName, setProductName] = useState('');
  const [user, setUser] = useState('tester123');

  const sortQuestions = (questionsArray) => {
    setQuestions((questionsArray.filter(item => {
      return item.asker_name === user;
    })).concat((questionsArray.filter(item => {
      return item.asker_name !== user;
    }).sort((a, b) => {
      return b.question_helpfulness - a.question_helpfulness;
    }))));
  };

  useEffect(() => {
    setProductName(productInfo ? productInfo.name : '');
    setQuestions(questionsInfo);
    }, [productInfo, questionsInfo]);

  return (
    <div data-testid="qa-div" id="qa">
      <h1 id="qa-header">QUESTIONS AND ANSWERS</h1>
      <QACardQuestions currentProductId={currentProductId} questionsInfo={questionsInfo} productName={productName} />
      <p></p>
    </div>
  );
};

export default QuestionsAndAnswers;

