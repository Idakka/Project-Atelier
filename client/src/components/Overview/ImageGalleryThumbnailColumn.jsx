import React from 'react';
import ImageGalleryThumbnail from './ImageGalleryThumbnail.jsx';
import ImageGalleryThumbnailColumnUpArrow from './ImageGalleryThumbnailColumnUpArrow.jsx';
import ImageGalleryThumbnailColumnDownArrow from './ImageGalleryThumbnailColumnDownArrow.jsx';

class ImageGalleryThumbnailColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let thumbnails = this.props.productStyles.results[0].photos.map((style) => {
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
  }
};

export default ImageGalleryThumbnailColumn;