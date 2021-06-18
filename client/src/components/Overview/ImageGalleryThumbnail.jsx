import React from 'react';

var ImageGalleryThumbnail = function(props) {
  if (props.selected) {
    return (
      <React.Fragment>
        <div className='image-gallery-thumbnail'>
          <hr className='three-px-hr'/>
        </div>
      </React.Fragment>
    );
  } else return (
    <div className='image-gallery-thumbnail'></div>
  );
};

export default ImageGalleryThumbnail;