import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const QuestionsAndAnswers = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div id="qa-div">
      <h1 id="qa-header">QUESTIONS AND ANSWERS</h1>

      <form id="search">
        <input className="qa-searchbar" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
        {/* NOTE - Search button will be replaced with icon later on  */}
        <button className="qa-search-btn">Search</button>
      </form>

      <p></p>

      {/* NOTE - Refactor to have a seperate component later on when there is more to display */}
      <div className="qa-card-sample">
        <b><div className="qa-div">Q: Question [Placeholder]</div></b><p></p>
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
      </div>

      <p></p>

      <button className="qa-more">MORE ANSWERED QUESTIONS</button>

      <button onClick={() => setModalIsOpen(true)} className="qa-add">ADD A QUESTION +</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Ask Your Question</h2>
        <h3>About the [Product Name Placeholder]</h3>
        <form className="add-question-form">
          <label className="add-form-question">Question*</label>
          <textarea rows="10" maxLength="1000" required></textarea><p></p>
          <label className="add-form-username">Username*</label>
          <input maxLength="60" required></input><p></p>
          <label className="add-form-email">Email*</label>
          <input maxLength="60" required></input><p></p>
          <button className="add-form-submit" onClick={() => setModalIsOpen(false)}>Submit</button>
        </form>
      </Modal>

      <p></p>
    </div>

  );
};

export default QuestionsAndAnswers;