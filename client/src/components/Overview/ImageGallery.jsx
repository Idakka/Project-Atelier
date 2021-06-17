import React from 'react';
import ImageGalleryThumbnailColumn from './ImageGalleryThumbnailColumn.jsx';
import ImageGalleryForwardArrow from './ImageGalleryForwardArrow.jsx';
import ImageGalleryBackArrow from './ImageGalleryBackArrow.jsx';

var ImageGallery = function({ productStyles }) {
  let photo = productStyles.results[0].photos[0].url;
  return (
    <div className="image-gallery-container" data-testid="image-gallery">
      <div className="image-gallery">
        <img className="ig-main-image" src={photo} />
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