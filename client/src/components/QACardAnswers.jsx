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
        <div className="external" key={index}>
          <div className="qa-div" ><b>A:</b> {answer.body}</div>
            <div className="qa-footer">
              <label className="qa-username">by {answer.answerer_name},
                <label className="qa-date"> {answer.date}
                  <label className="qa-helpful"> <a href="">Helpful? ({answer.helpfulness})</a>
                    <label className="qa-report"> <a href="">Report </a>
                    </label>
                  </label>
                </label>
              </label>
            </div>
        </div>
      )}
    </div >
  );
};

export default QACardAnswers;
