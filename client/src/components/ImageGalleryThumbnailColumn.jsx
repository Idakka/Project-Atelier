import React from 'react';
import ImageGalleryThumbnail from './ImageGalleryThumbnail.jsx';
import ImageGalleryThumbnailColumnUpArrow from './ImageGalleryThumbnailColumnUpArrow.jsx';
import ImageGalleryThumbnailColumnDownArrow from './ImageGalleryThumbnailColumnDownArrow.jsx';

var ImageGalleryThumbnailColumn = function(props) {
  return (
    <div className="image-gallery-thumbnail-column" data-testid="ig-tc">
      <ImageGalleryThumbnailColumnUpArrow />
      <ImageGalleryThumbnail selected={true}/>
      <ImageGalleryThumbnail />
      <ImageGalleryThumbnail />
      <ImageGalleryThumbnailColumnDownArrow />
    </div>
  );
};

export default ImageGalleryThumbnailColumn;