import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import QACardQuestions from './QACardQuestions.jsx';
import QACardAnswers from './QACardAnswers.jsx';
import QAAddQuestionModal from './QAAddQuestionModal.jsx';

// Modal.setAppElement('#app');
if (process.env.NODE_ENV !== 'test') {
  Modal.setAppElement('#app');
}

const QuestionsAndAnswers = (props) => {

  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [product, setProduct] = useState('');
  // questions array for current product
  const [questions, setQuestions] = useState([]);
  const [questionLength, setQuestionLength] = useState(0);
  // array for questions to display
  const [questionsToShow, setQuestionsToShow] = useState([]);
  const [questionsToShowLength, setQuestionsToShowLength] = useState(4);
  // variables to take in product info
  const [productName, setProductName] = useState(props.productInfo.name);


  useEffect(() => {
    axios.get('/qa/questions/')
      .then(response => {
        setQuestions(response.data);
        setQuestionLength(response.data.length);
        setQuestionsToShow(response.data.slice(0, questionsToShowLength));
        setQuestionsToShowLength(questionsToShowLength + 2);
      })
      .catch(err => err);
  }, []);

  // sorts questions by helpfulness
  questions.sort((a, b) => {
    return b.question_helpfulness - a.question_helpfulness;
  });

  return (
    <div data-testid="qa-div" id="qa">
      <h1 id="qa-header">QUESTIONS AND ANSWERS</h1>

      <form id="search">
        <input className="qa-searchbar" data-testid="qa-searchbar" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
        {/* NOTE - Search button will be replaced with icon later on  */}
        <button className="qa-search-btn">Search</button>
      </form>

      <div data-testid="qa"><QACardQuestions questions={questionsToShow} productName={productName}/></div>

      <div className="qa-footer-buttons" data-testid="qa-footer-buttons">
        <button className="qa-more" onClick={() => {
          setQuestionsToShowLength(questionsToShowLength + 2);
          setQuestionsToShow(questions.slice(0, questionsToShowLength));
        }}>MORE ANSWERED QUESTIONS</button>
        <div className="qa-more"><QAAddQuestionModal productName={productName}/></div>
      </div>

      <p></p>
    </div>

  );
};

export default QuestionsAndAnswers;
