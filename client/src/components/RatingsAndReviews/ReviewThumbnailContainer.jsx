import React from 'react';
import ReviewThumbnail from './ReviewThumbnail.jsx';

const ReviewThumbnailContainer = ({ thumbnails }) => {
  return (
    <div className="review-thumbnail-container" data-testid="review-thumbnail-container">
      {thumbnails.map((thumbnailURL, index) =>
        <ReviewThumbnail key={thumbnailURL} thumbnailURL={thumbnailURL} />
      )}
    </div>
  );
};

export default ReviewThumbnailContainer;