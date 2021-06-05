import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';


const QACardAnswers = ({ questions, answers }) => {

  return (
    <div id="qa-div-card">
      <h1>...new answers...</h1>
      {/* <div>{answers.map(item => */}

        <div className="external">
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
          <h1>...new answers...</h1>
        </div>
      {/* )} </div> */}
    </div>

  );
};

export default QACardAnswers;