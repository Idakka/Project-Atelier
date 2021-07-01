import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QACardAnswers from './QACardAnswers.jsx';
import QAAddAnswerModal from './QAAddAnswerModal.jsx';
import QAAddQuestionModal from './QAAddQuestionModal.jsx';

const QACardQuestions = ({ questionsInfo, productName, currentProductId }) => {

  const [word, setWord] = useState('');
  const [temp, setTemp] = useState('');
  const [length, setLength] = useState(4);
  const [helpfulArray, setHelpfulArray] = useState([]);

  const APICallHelpful = (questionId) => {
    if (helpfulArray.includes(questionId) === false) {
      axios.put(`/qa/questions/:answer_id/helpful`, { question_id: questionId })
        .then(info => console.log('info:', info))
        .catch(err => err);
      helpfulArray.push(questionId);
    }
  };

  const APICallReport = (questionId) => {
    axios.put(`/qa/questions/:question_id/report`, { question_id: questionId })
      .then(info => console.log('info:', info))
      .catch(err => err);
  };

  const increaseCount = () => {
    event.preventDefault();
    setLength(length + 2);
  };

  const filterQuestions = (current) => {
    setTemp(current);
    if ((temp.length >= 0) && (temp.length < 3)) {
      setWord('');
    } else if (temp.length === 3) {
      setWord(temp);
      setLength(4);
    } else if (temp.length > 3) {
      setLength(questionsInfo.length);
    }
  };

  return (
    <div data-testid="qa-questions">
      <form data-testid="search" id="search">
        <input className="qa-searchbar" data-testid="qa-searchbar" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          onChange={() => {
            filterQuestions(event.target.value);
          }}
        ></input>
        {/* NOTE - Search button will be replaced with icon later on */}
        <button className="qa-search-btn" onClick={() => {
        }}>Search</button>
      </form>

      <div data-testid="qa-scroll" id="qa-scroll">
        {questionsInfo.slice(0, length).filter((item, index) => item.question_body.includes(word)).map((question, index) => (
          <div key={index}>
            <div className="qa-card-sample" data-testid="qa-card-sample" key={index}>
              <b><div className="qa-div">Q: {question.question_body}
                <div className="qa-helpfulness-right right-spacing" data-testid="qa-helpfulness-right">

                  <span className="right-spacing" onClick={() => {
                    event.preventDefault();
                    APICallReport(question.question_id);
                    event.target.innerText = 'Reported';
                  }}>Report</span>

                  <span className="right-spacing" id={question.question_id} onClick={() => {
                    event.preventDefault();
                    APICallHelpful(question.question_id);
                    event.target.innerText = `Helpful? Yes (${question.question_helpfulness + 1})`;
                  }}>Helpful? Yes ({question.question_helpfulness}) </span>

                  <QAAddAnswerModal question={question} index={index} productName={productName} />
                </div>
              </div></b>
            </div>
            <div data-testid="answers"><QACardAnswers currentAnswers={question.answers} /></div>
          </div>
        ))}
      </div>

      <div className="qa-footer-buttons" data-testid="qa-footer-buttons">
        <button className="qa-more" onClick={() => increaseCount()}>MORE ANSWERED QUESTIONS</button>
        <div className="qa-more" data-testid="qa-more">
          <QAAddQuestionModal productName={productName} currentProductId={currentProductId} />
        </div>
      </div>
    </div>
  );

};

export default QACardQuestions;
