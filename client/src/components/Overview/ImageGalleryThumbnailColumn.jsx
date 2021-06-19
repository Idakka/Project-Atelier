import React from 'react';
import ImageGalleryThumbnail from './ImageGalleryThumbnail.jsx';
import ImageGalleryThumbnailColumnUpArrow from './ImageGalleryThumbnailColumnUpArrow.jsx';
import ImageGalleryThumbnailColumnDownArrow from './ImageGalleryThumbnailColumnDownArrow.jsx';

var ImageGalleryThumbnailColumn = function({ productStyles }) {
  let thumbnails = productStyles.results[0].photos.map((style) => {
    return <ImageGalleryThumbnail key={style.thumbnail_url} thumbnail_url={style.thumbnail_url} />
  });

  return (
    <div className="ig-thumbnail-column" data-testid="ig-tc">
      <ImageGalleryThumbnailColumnUpArrow />
        <div className="ig-thumbnail-inner-container">
          {thumbnails}
        </div>
      <ImageGalleryThumbnailColumnDownArrow />
    </div>
  );
};

export default ImageGalleryThumbnailColumn;