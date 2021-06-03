import React from 'react';
import ImageGalleryThumbnail from './ImageGalleryThumbnail.jsx';

var ImageGalleryThumbnailColumn = function(props) {
  return (
    <div className="image-gallery-thumbnail-column">
      <ImageGalleryThumbnail selected={true}/>
      <ImageGalleryThumbnail />
      <ImageGalleryThumbnail />
    </div>
  );
};

export default ImageGalleryThumbnailColumn;