import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';

// Modal.setAppElement('#app');
if (process.env.NODE_ENV !== 'test') {
  Modal.setAppElement('#app');
}

const QACardAnswers = ({ currentAnswers }) => {

  const [answers, setAnswers] = useState([]);
  // toggle is to make sure we avoid infinite rerender loop
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (answers) {
      for (var key in currentAnswers) {
        answers.push(currentAnswers[key]);
      }
    }
    setToggle(true);
  }, []);

  return (
    < div id="qa-div-card">
      {answers.map((answer, index) =>
        <div className="answers-external" key={index}>
          <div className="qa-div" ><b>A:</b> {answer.body}</div>
          <p className="qa-footer"> by {answer.answerer_name}, {answer.date}
            <span className="divider">|</span>
            <a href="">Helpful? ({answer.helpfulness})</a>
            <span className="divider">|</span>
            <a href="">Report </a>
          </p>
        </div>
      )}
    </div >
  );
};

export default QACardAnswers;
