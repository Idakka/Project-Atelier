import React from 'react';
import ImageGalleryThumbnailColumn from './ImageGalleryThumbnailColumn.jsx';

var ImageGallery = function(props) {
  return (
    <div className="image-gallery-container">
      <div className="image-gallery">
        &nbsp;
        <ImageGalleryThumbnailColumn />
        <div className="image-gallery-fullscreen-toggle">
          <span className="material-icons">fullscreen</span>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;