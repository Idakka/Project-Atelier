import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import QACardAnswers from './QACardAnswers.jsx';

// Modal.setAppElement('#app');
if (process.env.NODE_ENV !== 'test') {
  Modal.setAppElement('#app');
}

const QACardQuestions = ({ questions }) => {

  const [modalIsOpenAdd, setModalIsOpenAdd] = useState(false);
  // NOTE - keeping for refactor later on based on server changes for this path
  // // answers array for current product
  // const [answers, setAnswers] = useState([]);

  // useEffect(() => {
  //   axios.get('/qa/questions/:question_id/answers')
  //     .then(response => {
  //       setAnswers(response.data);
  //     })
  //     .catch(err => console.log('axios err answers', err));
  // }, []);

  return (
    <div data-testid="qa-div-card-questions">
      <div>{questions.map((question, index) =>
        <div className="qa-card-sample" key={index}>
          <b><div className="qa-div">Q: {question.question_body}
            <div className="qa-helpfulness-right">Helpful? <a href='' className='right-spacing'>Yes ({question.question_helpfulness}) </a>
              <button onClick={() => setModalIsOpenAdd(true)} className="qa-add-answer" href=""><b>[Add Answer]</b></button>
              <Modal isOpen={modalIsOpenAdd} onRequestClose={() => setModalIsOpenAdd(false)}>
                <h2>Submit Your Answer</h2>
                <h3>[Product Name]: [Question Body] </h3>
                <form className="add-answer-form">
                  <label className="add-form-answer">Answer* </label>
                    <textarea rows="10" maxLength="1000" required /><p></p>
                  <label className="add-form-username">Nickname*</label>
                    <input maxLength="60" placeholder="Example: jack543!" required /><p className="qa-form-small">For privacy reasons, do not use your full name or email address</p>
                  <label className="add-form-email">Email*</label>
                    <input maxLength="60" placeholder="Example: jack@email.com" required /><p className="qa-form-small">For authentication reasons, you will not be emailed</p>
                  <button className="qa-add-form-submit" onClick={() => setModalIsOpenAdd(false)}>Submit</button>
                </form>
              </Modal>
            </div>
          </div></b>
          <div data-testid="answers"><QACardAnswers currentAnswers={question.answers} /></div>
        </div>)}</div>
    </div>
  );
};

export default QACardQuestions;