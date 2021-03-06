import React from 'react';

const WordCount = ({ text }) => {

  const count = text.length;
  const remainingCount = 50 - count;
  const message = remainingCount < 1 ? 'Minimum reached' : `Minimum required characters left: ${remainingCount}`;

  return (
    <div className="word-count" data-testid="word-count">
      <p className="form-detail-text">
        {message}
      </p>
    </div>
  );
};

export default WordCount;