import React from 'react';
import ImageGalleryThumbnailColumn from './ImageGalleryThumbnailColumn.jsx';
import ImageGalleryForwardArrow from './ImageGalleryForwardArrow.jsx';
import ImageGalleryBackArrow from './ImageGalleryBackArrow.jsx';

const ImageGallery = function(props) {
  let { productStyles = {}, thumbnailClicked, nextPic, prevPic } = props;
  let { selectedStyle, selectedPhoto } = props.overview.state;
  let photo;
  if (productStyles[selectedStyle]) {
    photo = productStyles[selectedStyle].photos[selectedPhoto].url;
  } else {
    photo = '';
  }
  return (
    <div className="image-gallery-container" data-testid="image-gallery">
      <div className="image-gallery">
        <img className="ig-main-image" src={photo} />
        <ImageGalleryBackArrow prevPic={prevPic} />
        <ImageGalleryForwardArrow nextPic={nextPic} />
        <ImageGalleryThumbnailColumn productStyles={productStyles} thumbnailClicked={thumbnailClicked} selected={selectedPhoto} selectedStyle={selectedStyle} />
        <div className="image-gallery-fullscreen-toggle">
          <span className="material-icons">fullscreen</span>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;