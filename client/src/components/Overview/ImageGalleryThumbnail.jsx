import React from 'react';

var ImageGalleryThumbnail = function(props) {
  if (props.selected) {
    return (
      <React.Fragment>
        <div className='image-gallery-thumbnail'>
          <img src={props.thumbnail_url} className="ig-thumbnail" />
          <hr className='three-px-hr'/>
        </div>
      </React.Fragment>
    );
  } else return (
    <div className='image-gallery-thumbnail'>
      <img src={props.thumbnail_url} className="ig-thumbnail"/>
    </div>
  );
};

export default ImageGalleryThumbnail;