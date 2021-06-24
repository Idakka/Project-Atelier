import React, { useState, useEffect } from 'react';

const QAAddQuestionModal = ({ productName }) => {

  return (
    <div data-testid="qa-div-card-question">
      <button id="qa-modal-button" className="qa-add" onClick={() => {
        document.getElementById('index').style.display = "block";
      }}>ADD A QUESTION +</button>
      <div id='index' className="qa-modal">
        <div className="qa-modal-content">
          <div className="qa-modal-close" onClick={() => {
            document.getElementById('index').style.display = "none";
          }}>&times;</div>
          <h2>Ask Your Question</h2>
          <h3>About the {productName.name}</h3>
          <form className="add-answer-form">
            <label className="add-form-question">Question*</label>
            <textarea rows="10" maxLength="1000" required /><p></p>
            <label className="add-form-username">Nickame*</label>
            <input maxLength="60" placeholder="Example: jackson11!" required /><p className="qa-form-small">For privacy reasons, do not use your full name or email address</p>
            <label className="add-form-email">Email*</label>
            <input maxLength="60" required /><p className="qa-form-small">For authentication reasons, you will not be emailed</p>
            <button className="qa-add-form-submit" >Submit</button>
          </form>
        </div>
      </div>
    </div>
  );

};

export default QAAddQuestionModal;