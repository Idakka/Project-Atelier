import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import QACardQuestions from './QACardQuestions.jsx';
import QACardAnswers from './QACardAnswers.jsx';

// Modal.setAppElement('#app');
if (process.env.NODE_ENV !== 'test') {
  Modal.setAppElement('#app');
}

const QuestionsAndAnswers = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  // questions array for current product
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('/qa/questions/')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(err => err);
  }, []);

  return (
    <div id="qa-div">
      <h1 id="qa-header">QUESTIONS AND ANSWERS</h1>

      <form id="search">
        <input className="qa-searchbar" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
        {/* NOTE - Search button will be replaced with icon later on  */}
        <button className="qa-search-btn">Search</button>
      </form>

      <div data-testid="qa"><QACardQuestions questions={questions} /></div>

      <button className="qa-more">MORE ANSWERED QUESTIONS</button>

      <button onClick={() => setModalIsOpen(true)} className="qa-add">ADD A QUESTION +</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Ask Your Question</h2>
        <h3>About the [Product Name Placeholder]</h3>
        <form className="add-question-form">
          <label className="add-form-question">Question*</label>
          <textarea rows="10" maxLength="1000" required /><p></p>
          <label className="add-form-username">Nickame*</label>
          <input maxLength="60" placeholder="Example: jackson11!" required /><p className="form-small">For privacy reasons, do not use your full name or email address</p>
          <label className="add-form-email">Email*</label>
          <input maxLength="60" required /><p className="form-small">For authentication reasons, you will not be emailed</p>
          <button className="add-form-submit" onClick={() => setModalIsOpen(false)}>Submit</button>
        </form>
      </Modal>

      <p></p>
    </div>

  );
};

export default QuestionsAndAnswers;