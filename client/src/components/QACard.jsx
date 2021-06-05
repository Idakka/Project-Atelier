import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';

// Modal.setAppElement('#app');
if (process.env.NODE_ENV !== 'test') {
  Modal.setAppElement('#app');
}

const QACard = ({ questions, answers }) => {
  const [modalIsOpenAdd, setModalIsOpenAdd] = useState(false);

  return (
    <div id="qa-div-card">
      <h1>...new...</h1>
      <div>{questions.map((question) =>
        <div className="qa-card-sample"> Q_ID: {question.question_id}
          <b><div className="qa-div">Q: {question.question_body}
            <button onClick={() => setModalIsOpenAdd(true)} className="qa-add-answer" href="">Add Answer</button>
            <Modal isOpen={modalIsOpenAdd} onRequestClose={() => setModalIsOpenAdd(false)}>
              <h2>Submit Your Answer</h2>
              <h3>[Product Name]: [Question Body] </h3>
              <form className="add-answer-form">
                <label className="add-form-answer">Answer*</label>
                <textarea rows="10" maxLength="1000" required /><p></p>
                <label className="add-form-username">Nickname*</label>
                <input maxLength="60" placeholder="Example: jack543!" required /><p className="form-small">For privacy reasons, do not use your full name or email address</p>
                <label className="add-form-email">Email*</label>
                <input maxLength="60" placeholder="Example: jack@email.com" required /><p className="form-small">For authentication reasons, you will not be emailed</p>
                <button className="add-form-submit" onClick={() => setModalIsOpenAdd(false)}>Submit</button>
              </form>
            </Modal>
          </div>

          </b>
        </div>

      )}</div>

      {/* <div className="external">
        <div className="qa-div"><b>A: </b>Answer [Placeholder]</div><p></p>
        <div className="qa-footer">
          <label className="qa-username">by Username [Placeholder],
              <label className="qa-date"> Date [Placeholder]
                <label className="qa-helpful"> Helpful? [Placeholder]
                  <label className="qa-report"> Report [Placeholder] <p></p>
                  <label className="qa-load-more"><b>[LOAD MORE ANSWERS]</b>
                  </label>
                </label>
              </label>
            </label>
          </label>
        </div>
        <h1>...new...</h1>
      </div> */}

    </div>


  );
};

export default QACard;