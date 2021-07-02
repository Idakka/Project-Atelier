
import React from 'react';

const ReviewThumbnailTwo = ({ thumbnailURL }) => {

  return (
    <div className="review-thumbnail-container">
      <img src={thumbnailURL} className="review-thumbnail" data-index={thumbnailURL} />
      <hr className='three-px-hr'/>
    </div>
  );
};

export default ReviewThumbnailTwo;