import React from 'react';
import ImageGalleryThumbnailColumn from './ImageGalleryThumbnailColumn.jsx';
import ImageGalleryForwardArrow from './ImageGalleryForwardArrow.jsx';
import ImageGalleryBackArrow from './ImageGalleryBackArrow.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: 0, // this will later move up to the overview component, but for quick testing, it's here.
      selectedPhoto: 0
    }
  };

  render() {
    let { selectedStyle, selectedPhoto } = this.state;
    let { productStyles } = this.props;
    let photo = productStyles.results[selectedStyle].photos[selectedPhoto].url;
    return (
      <div className="image-gallery-container" data-testid="image-gallery">
        <div className="image-gallery">
          <img className="ig-main-image" src={photo} />
          <ImageGalleryBackArrow />
          <ImageGalleryForwardArrow />
          <ImageGalleryThumbnailColumn productStyles={productStyles} gallery={this}/>
          <div className="image-gallery-fullscreen-toggle">
            <span className="material-icons">fullscreen</span>
          </div>
        </div>
      </div>
    );
  };
};

export default ImageGallery;