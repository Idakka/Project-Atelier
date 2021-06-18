import React, { useState, useEffect } from 'react';
import QACardAnswers from './QACardAnswers.jsx';
import QAAddAnswerModal from './QAAddAnswerModal.jsx';
import QAAddQuestionModal from './QAAddQuestionModal.jsx';

const QACardQuestions = ({ questions, productName }) => {

  const [modalIsOpenAdd, setModalIsOpenAdd] = useState(false);

  // NOTE - keeping for refactor later on based on server changes for this path
  // // answers array for current product
  // const [answers, setAnswers] = useState([]);

  const [word, setWord] = useState('');
  const [length, setLength] = useState(4);

  // useEffect(() => {
  //   axios.get('/qa/questions/:question_id/answers')
  //     .then(response => {
  //       setAnswers(response.data);
  //     })
  //     .catch(err => err);
  // }, []);

  const increaseCount = () => {
    event.preventDefault();
    setLength(length + 2);
  };

  const filterQuestions = () => {
    if (event.target.value.length < 3) {
      setWord('');
    } else {
      setWord(event.target.value);
    }
  };

  return (
    <div data-testid="qa-questions">
      <form data-testid="search" id="search">
        <input className="qa-searchbar" data-testid="qa-searchbar" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          onChange={() => {
            filterQuestions();
            setLength(4);
          }}
        ></input>
        {/* NOTE - Search button will be replaced with icon later on */}
        <button className="qa-search-btn" onClick={() => {
        }}>Search</button>
      </form>

      <div data-test-id="qa-scroll" id="qa-scroll">
        {questions.slice(0, length).filter((item) => item.question_body.includes(word)).map((question, index) => (
          <div key={index}>
            <div className="qa-card-sample" data-testid="qa-card-sample" key={index}>
              <b><div className="qa-div">Q: {question.question_body}
                <div className="qa-helpfulness-right" data-testid="qa-helpfulness-right">Helpful? <a href='' className='right-spacing'>Yes ({question.question_helpfulness}) </a>
                  <QAAddAnswerModal question={question} productName={productName} />
                </div>
              </div></b>
            </div>
            <div data-testid="answers"><QACardAnswers currentAnswers={question.answers} /></div>
          </div>
        ))}
      </div>

      <div className="qa-footer-buttons" data-testid="qa-footer-buttons">
        <button className="qa-more" onClick={() => increaseCount()}>MORE ANSWERED QUESTIONS</button>
        <div className="qa-more" data-testid="qa-more"><QAAddQuestionModal productName={productName} /></div>
      </div>
    </div>
  );
};

export default QACardQuestions;