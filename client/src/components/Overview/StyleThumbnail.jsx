import React from 'react';

var StyleThumbnail = function(props) {
  return (
    <div className='style-thumbnail-container'>
      <img className='style-thumbnail' src={props.thumbnail_url}/>
    </div>
  );
};

export default StyleThumbnail;