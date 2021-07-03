import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import QACardAnswers from './QACardAnswers.jsx';
import ReviewThumbnailContainer from '../RatingsAndReviews/ReviewThumbnailContainer.jsx';

const QAAddAnswerModal = ({ question, index, productName }) => {
  // handles onChange for inputs
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [fileLoaded, setFileLoaded] = useState(0);

  const APICall = (question, answer, nickname, email) => {
    let message = '';
    if (answer === '') {
      message += ' Please include an answer. \n ';
    }
    if (nickname === '') {
      message += ' Please include a nickname. \n ';
    }
    if (email === '') {
      message += ' Please include an email. \n ';
    }
    if (email !== '' && email.includes('@') === false) {
      message += ' Please include a valid email. \n ';
    }

    if (message !== '') {
      alert(`You must enter the following: \n ${message}`);
      document.getElementById(index).style.display = 'block';
    } else if (message === '') {
      axios.post('/qa/questions/:question_id/answers', ({ question_id: question.question_id, body: answer, name: nickname, email: email, photos: photos }))
        .then(info => info)
        .catch(err => err);
    }
  };

  const onChangeFileHandler = (event) => {
    let tempImageURLArray = photos;
    let fileCount = fileLoaded;
    tempImageURLArray.push(URL.createObjectURL(event.target.files[0]));
    fileCount++;
    setPhotos(tempImageURLArray);
    setFileLoaded(fileCount);
  };

  const onClickUploadHandler = () => {
    const data = new FormData();
    data.append('file', photos);
    axios.post(`http://localhost:${port}/upload`, data)
      .then(response => {
        console.log('successful upload: ', response);
      });
  };

  return (
    <div data-testid="qa-div-card-questions">
      <button id="qa-modal-button" className="qa-add" onClick={() => {
        document.getElementById(index).style.display = 'block';
      }}><b>[Add Answer]</b></button>
      <div id={index} className="qa-modal">
        <div className="qa-modal-content">
          <div className="qa-modal-close" onClick={() => {
            document.getElementById(index).style.display = 'none';
          }}>&times;</div>
          <h2>Submit Your Answer</h2>
          <h3>{productName}: {question.question_body} </h3>
          <form className="add-answer-form">
            <label className="add-form-answer">Answer* </label>
            <textarea rows="10" maxLength="1000" placeholder="Your answer here..." required onChange={() => setAnswer(event.target.value)} /><p></p>
            <label className="add-form-username">Nickname*</label>
            <input maxLength="60" placeholder="Example: jack543!" required onChange={() => setNickname(event.target.value)} /><p className="qa-form-small">For privacy reasons, do not use your full name or email address</p>
            <label className="add-form-email">Email*</label>
            <input maxLength="60" placeholder="Example: jack@email.com" required onChange={() => setEmail(event.target.value)} /><p className="qa-form-small">For authentication reasons, you will not be emailed</p>
            <label className="add-form-email">Upload Your Images:</label><input type="file" onChange={onChangeFileHandler}/>
            <ReviewThumbnailContainer thumbnails={photos} />
            <button className="qa-add-form-submit" onClick={() => {
              event.preventDefault();
              document.getElementById(index).style.display = 'none';
              APICall(question, answer, nickname, email);
            }}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QAAddAnswerModal;