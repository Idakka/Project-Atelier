import React from 'react';

var ImageGalleryForwardArrow = function(props) {
  return (
    <div className="image-gallery-back-arrow" data-testid="ig-ba" onClick={props.prevPic}>
      <span className="material-icons">arrow_back</span>
    </div>
  );
};

export default ImageGalleryForwardArrow;