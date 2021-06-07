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
  // answers array for current product
  const [answersNow, setAnswersNow] = useState([]);

  useEffect(() => {
    axios.get('/qa/questions/:question_id/answers')
      .then(response => {
        console.log('saving', response.data);
        setAnswersNow(response.data);
      })
      .catch(err => console.log('axios err answers', err));
  }, []);

  console.log('--->>>>', answersNow);
  console.log('QUESTIONS', questions);

  return (
    <div id="qa-div-card">
      <div>{questions.map((question, index) =>
        <div className="qa-card-sample" key={question.question_id}>
          {/* NOTE - remove once done rendering, added for tracking */}
          <div className="form-small">Q_ID: {index} - {question.question_id} </div>
          {console.log('look', questions[0].answers[1444586].body)}
          {/* {console.log('?', question.answers)} */}
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
          <div><QACardAnswers current={question} answersNow={answersNow}/></div>

        </div>

      )}</div>
    </div>
  );
};

export default QACardQuestions;