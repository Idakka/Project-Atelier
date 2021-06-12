import React, { useState } from 'react';
import Modal from 'react-modal';


const QAAddQuestionModal = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)} className="qa-add">ADD A QUESTION +</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Ask Your Question</h2>
        <h3>About the [Product Name Placeholder]</h3>
        <form className="add-question-form">
          <label className="add-form-question">Question*</label>
          <textarea rows="10" maxLength="1000" required /><p></p>
          <label className="add-form-username">Nickame*</label>
          <input maxLength="60" placeholder="Example: jackson11!" required /><p className="qa-form-small">For privacy reasons, do not use your full name or email address</p>
          <label className="add-form-email">Email*</label>
          <input maxLength="60" required /><p className="qa-form-small">For authentication reasons, you will not be emailed</p>
          <button className="qa-add-form-submit" onClick={() => setModalIsOpen(false)}>Submit</button>
        </form>
      </Modal>
    </div>
  );

};

export default QAAddQuestionModal;