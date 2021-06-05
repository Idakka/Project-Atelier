import React from 'react';
import ImageGalleryThumbnailColumn from './ImageGalleryThumbnailColumn.jsx';
import ImageGalleryForwardArrow from './ImageGalleryForwardArrow.jsx';
import ImageGalleryBackArrow from './ImageGalleryBackArrow.jsx';

var ImageGallery = function(props) {
  return (
    <div className="image-gallery-container" data-testid="image-gallery">
      <div className="image-gallery">
        <ImageGalleryBackArrow />
        <ImageGalleryForwardArrow />
        <ImageGalleryThumbnailColumn />
        <div className="image-gallery-fullscreen-toggle">
          <span className="material-icons">fullscreen</span>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;