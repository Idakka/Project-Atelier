import React from 'react';
import ReviewThumbnailTwo from './ReviewThumbnailTwo.jsx';

const ReviewThumbnailContainerTwo = ({ thumbnails }) => {
  return (
    <div className="review-thumbnail-container" data-testid="review-thumbnail-container">
      {thumbnails.map((thumbnailURL, index) =>
        <ReviewThumbnailTwo key={thumbnailURL} thumbnailURL={thumbnailURL} />
      )}
    </div>
  );
};

export default ReviewThumbnailContainerTwo;