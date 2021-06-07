import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';


const QACardAnswers = ({ current, answersNow }) => {

  console.log('current passed', current);
  // console.log('array', answersNow);

  // answerer_name: "Seller"
  // body: "We are selling it here without any markup from the middleman!"
  // date: "2018-08-18T00:00:00.000Z"
  // helpfulness: 4
  // id: 1444586

  return (
    <div id="qa-div-card">

    {answersNow.map((item, index) =>

      <div className="external">
      {/* NOTE - remove once done rendering, added for tracking */}
      <div className="form-small">A_ID: {index} - # of answers {item.length} </div>
        <div className="qa-div"><b>A: </b></div><p></p>
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
      </div>
        )}

    </div>
  );
};

export default QACardAnswers;