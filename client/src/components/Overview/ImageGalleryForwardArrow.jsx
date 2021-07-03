import React from 'react';

var ImageGalleryForwardArrow = function(props) {
  return (
    <div className="image-gallery-forward-arrow" data-testid="ig-fa" onClick={props.nextPic}>
      <span className="material-icons">arrow_forward</span>
    </div>
  );
};

export default ImageGalleryForwardArrow;