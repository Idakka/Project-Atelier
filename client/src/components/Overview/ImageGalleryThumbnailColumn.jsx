import React from 'react';
import ImageGalleryThumbnail from './ImageGalleryThumbnail.jsx';
import ImageGalleryThumbnailColumnUpArrow from './ImageGalleryThumbnailColumnUpArrow.jsx';
import ImageGalleryThumbnailColumnDownArrow from './ImageGalleryThumbnailColumnDownArrow.jsx';

var ImageGalleryThumbnailColumn = function({ productStyles }) {
  console.log('productStyles in thumbnail column: ', productStyles);
  let thumbnails = productStyles.results[0].photos.map((style) => {
    return <ImageGalleryThumbnail key={style.thumbnail_url} thumbnail_url={style.thumbnail_url} />
  });

  return (
    <div className="image-gallery-thumbnail-column" data-testid="ig-tc">
      <ImageGalleryThumbnailColumnUpArrow />
      {thumbnails}
      <ImageGalleryThumbnailColumnDownArrow />
    </div>
  );
};

export default ImageGalleryThumbnailColumn;