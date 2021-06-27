import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import QACardAnswers from './QACardAnswers.jsx';

const QAAddAnswerModal = ({ question, index, productName }) => {
  // handles onChange for inputs
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  // sets up an object with responses, will send this to POST requests
  const [modalInfo, setModalInfo] = useState({});

  return (
    <div data-testid="qa-div-card-questions">
      <button id="qa-modal-button" className="qa-add" onClick={() => {
        document.getElementById(index).style.display = "block";
      }}><b>[Add Answer]</b></button>
      <div id={index} className="qa-modal">
        <div className="qa-modal-content">
          <div className="qa-modal-close" onClick={() => {
            document.getElementById(index).style.display = "none";
          }}>&times;</div>
          <h2>Submit Your Answer</h2>
          <h3>{productName.name}: {question.question_body} </h3>
          <form className="add-answer-form">
            <label className="add-form-answer">Answer* </label>
            <textarea rows="10" maxLength="1000" required onChange={() => setAnswer(event.target.value)} /><p></p>
            <label className="add-form-username">Nickname*</label>
            <input maxLength="60" placeholder="Example: jack543!" required onChange={() => setNickname(event.target.value)} /><p className="qa-form-small">For privacy reasons, do not use your full name or email address</p>
            <label className="add-form-email">Email*</label>
            <input maxLength="60" placeholder="Example: jack@email.com" required onChange={() => setEmail(event.target.value)} /><p className="qa-form-small">For authentication reasons, you will not be emailed</p>
            <button className="qa-add-form-submit" onClick={() => {
              event.preventDefault();
              console.log('answer: ', answer, ' - nickname', nickname, ' - email: ', email);
              setModalInfo({
                answer: answer,
                nickname: nickname,
                email: email
              });
            }}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QAAddAnswerModal;