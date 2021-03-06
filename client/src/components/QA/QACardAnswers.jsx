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
  const [helpfulArray, setHelpfulArray] = useState([]);
  const [user, setUser] = useState('tester123');

  const sortAnswers = (answersArray) => {
    const currentUserAnswers = answersArray.filter(item => {
      return item.answerer_name === user;
    });
    let notCurrentUserAnswers = answersArray.filter(item => {
      return item.answerer_name !== user;
    });
    notCurrentUserAnswers.sort((a, b) => {
      return b.helpfulness - a.helpfulness;
    });
    const allAnswers = [...currentUserAnswers, ...notCurrentUserAnswers];
    setAnswers(allAnswers);
    setAnswersLength(allAnswers.length);
    setAnswersToShow(allAnswers.slice(0, answersToShowLength));
  };

  useEffect(() => {
    const incomingAnswers = [];
    if (currentAnswers) {
      for (var key in currentAnswers) {
        incomingAnswers.push(currentAnswers[key]);
      }
    }
    sortAnswers(incomingAnswers);
    setToggle(true);
  }, [currentAnswers]);


  const APICallHelpful = (answerId) => {
    if (helpfulArray.includes(answerId) === false) {
      axios.put(`/qa/answers/:answer_id/helpful`, { answer_id: answerId })
        .then(info => console.log('info:', info))
        .catch(err => err);
      helpfulArray.push(answerId);
    }
  };

  const APICallReport = (answerId) => {
    axios.put(`/qa/answers/:answer_id/report`, { answer_id: answerId })
      .then(info => console.log('info:', info))
      .catch(err => err);
  };

  // if there are no answers
  if (answersLength === 0) {
    return <div className="qa-div-answers" data-testid="qa-answers-div">Be the first to answer this question!</div>;
  }

  // if there are two or less answers, don't show any buttons
  if (answersLength <= 2) {
    return <div data-testid="qa-answers-div" data-testid="qa-div-card-answers">
      {answersToShow.map((answer, index) =>
        <div className="qa-answers-external" key={index}>
          <div className="qa-div-answers" ><b>A:</b> {answer.body}</div>
          <p className="qa-footer"> by {answer.answerer_name}, {format((new Date(answer.date)), "MMMM dd, yyyy")}
            <span className="qa-divider">|</span>
            <span className="need-cursor" onClick={() => {
              event.preventDefault();
              APICallHelpful(answer.id);
              event.target.innerText = `Helpful? Yes (${answer.helpfulness + 1})`;
            }}>Helpful? ({answer.helpfulness})</span>
            <span className="qa-divider">|</span>
            <span className="need-cursor" onClick={() => {
              event.preventDefault();
              APICallReport(answer.id);
              event.target.innerText = 'Reported';
            }}>Report</span>
          </p>
        </div>
      )}
    </div>;
  }

  // if there are more answers than those displayed, show "load more" button
  if (answersLength >= (answersToShowLength - 1)) {
    return <div data-testid="qa-answers-div" data-testid="qa-div-card-answers">
      {answersToShow.map((answer, index) =>
        <div className="qa-answers-external" key={index}>
          <div className="qa-div-answers" ><b>A:</b> {answer.body}</div>
          <p className="qa-footer"> by {answer.answerer_name}, {format((new Date(answer.date)), "MMMM dd, yyyy")}
            <span className="qa-divider">|</span>
            <span className="need-cursor" onClick={() => {
              event.preventDefault();
              APICallHelpful(answer.id);
              event.target.innerText = `Helpful? Yes (${answer.helpfulness + 1})`;
            }}>Helpful? Yes ({answer.helpfulness})</span>
            <span className="qa-divider">|</span>
            <span className="need-cursor" onClick={() => {
              event.preventDefault();
              APICallReport(answer.id);
              event.target.innerText = 'Reported';
            }}>Report</span>
          </p>
        </div>
      )}
      <button data-testid="qa-load-more" className="qa-load-more" onClick={() => {
        setAnswersToShowLength(answersToShowLength + 2);
        setAnswersToShow(answers.slice(0, answersToShowLength));
      }}><b><span className="qa-load">[See more answers]</span></b></button>
    </div>;
  }

  // if answers array is at max, show "collapse button"
  if (answersLength <= (answersToShowLength - 1)) {
    return <div data-testid="qa-answers-div" data-testid="qa-div-card-answers">
      {answersToShow.map((answer, index) =>
        <div className="qa-answers-external" key={index}>
          <div className="qa-div-answers" ><b>A:</b> {answer.body}</div>
          <p className="qa-footer"> by {answer.answerer_name}, {format((new Date(answer.date)), "MMMM dd, yyyy")}
            <span className="qa-divider">|</span>
            <span className="need-cursor" onClick={() => {
              event.preventDefault();
              APICallHelpful(answer.id);
              event.target.innerText = `Helpful? Yes (${answer.helpfulness + 1})`;
            }}>Helpful? Yes ({answer.helpfulness})</span>
            <span className="qa-divider">|</span>
            <span className="need-cursor" onClick={() => {
              event.preventDefault();
              APICallReport(answer.id);
              event.target.innerText = 'Reported';
            }}>Report</span>
          </p>
        </div>
      )}
      <button data-testid="qa-load-more" className="qa-load-more" onClick={() => {
        setAnswersToShowLength(2);
        setAnswersToShow(answers.slice(0, 2));
      }}><b><span className="qa-load">[Collapse Answers]</span></b></button>
    </div>;
  }
};

export default QACardAnswers;