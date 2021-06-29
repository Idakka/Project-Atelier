import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QAAddQuestionModal = ({ productName, currentProductId }) => {

  // handles onChange for inputs
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  // sets up an object with responses, will send this to POST requests
  const [modalInfo, setModalInfo] = useState({question: '', nickname: '', email: ''});

  const APICall = (question, nickname, email) => {
    axios.post('/qa/questions', ({product_id: currentProductId, body: question, name: nickname, email: email}))
      .then(info => info)
      .catch(err => err)
  }

  return (
    <div data-testid="qa-div-card-question">
      <button id="qa-modal-button" className="qa-add" onClick={() => {
        document.getElementById('qa-modal-add-question').style.display = "block";
      }}>ADD A QUESTION +</button>
      <div id='qa-modal-add-question' className="qa-modal">
        <div className="qa-modal-content">
          <div className="qa-modal-close" onClick={() => {
            document.getElementById('qa-modal-add-question').style.display = "none";
          }}>&times;</div>
          <h2>Ask Your Question</h2>
          <h3>About the {productName.name}</h3>
          <form className="add-answer-form">
            <label className="add-form-question">Question*</label>
            <textarea rows="10" maxLength="1000" required onChange={() => setQuestion(event.target.value)} /><p></p>
            <label className="add-form-username">Nickame*</label>
            <input maxLength="60" placeholder="Example: jackson11!" required onChange={() => setNickname(event.target.value)}/><p className="qa-form-small">For privacy reasons, do not use your full name or email address</p>
            <label className="add-form-email">Email*</label>
            <input maxLength="60" required onChange={() => setEmail(event.target.value)}/><p className="qa-form-small">For authentication reasons, you will not be emailed</p>
            <button className="qa-add-form-submit" onClick={() => {
              event.preventDefault();
              APICall(question, nickname, email);
            }}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );

};

export default QAAddQuestionModal;