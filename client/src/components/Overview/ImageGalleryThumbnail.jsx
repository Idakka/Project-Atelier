import React from 'react';

var ImageGalleryThumbnail = function(props) {
  if (props.selected) {
    return (
      <div className='image-gallery-thumbnail ig-thumbnail-extra-margin'>
        <img src={props.thumbnail_url} className="ig-thumbnail" data-index={props.index} onClick={props.thumbnailClicked}/>
        <hr className='three-px-hr'/>
      </div>
    );
  } else {
    return (
      <div className='image-gallery-thumbnail'>
        <img src={props.thumbnail_url} className="ig-thumbnail" data-index={props.index} onClick={props.thumbnailClicked}/>
      </div>
    );
  }
};
//};

export default ImageGalleryThumbnail;