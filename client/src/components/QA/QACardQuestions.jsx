import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import QACardAnswers from './QACardAnswers.jsx';
import QAAddAnswerModal from './QAAddAnswerModal.jsx';

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
  //     .catch(err => err);
  // }, []);

  return (
    <div data-testid="qa-div-card-questions" id="qa-div-card-questions">
      <div>{questions.map((question, index) =>
        <div className="qa-card-sample" key={index}>
          <b><div className="qa-div">Q: {question.question_body}
            <div className="qa-helpfulness-right" data-testid="qa-helpfulness-right">Helpful? <a href='' className='right-spacing'>Yes ({question.question_helpfulness}) </a>
              <QAAddAnswerModal question={question} />
            </div>
          </div></b>
          <div data-testid="answers"><QACardAnswers currentAnswers={question.answers} /></div>
        </div>)}</div>
    </div>
  );
};

export default QACardQuestions;