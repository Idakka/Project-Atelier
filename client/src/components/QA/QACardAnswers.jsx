import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from "date-fns";
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';

const QACardAnswers = ({ currentAnswers }) => {

  // array for all answers for current question
  const [answers, setAnswers] = useState([]);
  const [answersLength, setAnswersLength] = useState(0);
  // array for answers to render
  const [answersToShow, setAnswersToShow] = useState([]);
  const [answersToShowLength, setAnswersToShowLength] = useState(2);
  // toggle is to make sure we avoid infinite rerender loop
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (answers) {
      for (var key in currentAnswers) {
        answers.push(currentAnswers[key]);
      }
      setAnswers(answers);
      answers.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      });
      setAnswersLength(answers.length);
      setAnswersToShow(answers.slice(0, answersToShowLength));
      setAnswersToShowLength(answersToShowLength + 2);
    }
    setToggle(true);
  }, []);

  const APICallHelpful = (answerId) => {
    axios.put(`/qa/answers/:answer_id/helpful`, {answer_id: answerId})
      .then(info => console.log('info:', info))
      .catch(err => err);
  };

  const APICallReport = (answerId) => {
    axios.put(`/qa/answers/:answer_id/report`, {answer_id: answerId})
      .then(info => console.log('info:', info))
      .catch(err => err);
  };

  return (
    <div data-testid="qa-answers-div">
      <div data-testid="qa-div-card-answers">
        {answersToShow.map((answer, index) =>
          <div className="qa-answers-external" key={index}>
            <div className="qa-div-answers" ><b>A:</b> {answer.body}</div>
            <p className="qa-footer"> by {answer.answerer_name}, {format((new Date(answer.date)), "MMMM dd, yyyy")}
              <span className="qa-divider">|</span>
              <span onClick={() => APICallHelpful(answer.id)}>Helpful? ({answer.helpfulness})</span>
              <span className="qa-divider">|</span>
              <span onClick={() => APICallReport(answer.id)}>Report</span>
            </p>
          </div>
        )}
        <button data-testid="qa-load-more" className="qa-load-more" onClick={() => {
          setAnswersToShowLength(answersToShowLength + 2);
          setAnswersToShow(answers.slice(0, answersToShowLength));
        }}><b><span className="qa-load">[LOAD MORE ANSWERS]</span></b></button>
      </div>
    </div>
  );
};

export default QACardAnswers;


