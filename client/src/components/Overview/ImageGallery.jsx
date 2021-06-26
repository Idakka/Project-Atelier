import React from 'react';
import ImageGalleryThumbnailColumn from './ImageGalleryThumbnailColumn.jsx';
import ImageGalleryForwardArrow from './ImageGalleryForwardArrow.jsx';
import ImageGalleryBackArrow from './ImageGalleryBackArrow.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: 0
    };
    this.thumbnailClicked = this.thumbnailClicked.bind(this);
  }

  thumbnailClicked(event) {
    this.setState({ selectedPhoto: event.target.dataset.index});
  }

  render() {
    let { selectedPhoto } = this.state;
    let { productStyles } = this.props;
    let { selectedStyle } = this.props.overview.state;
    let photo = productStyles.results[selectedStyle].photos[selectedPhoto].url;
    return (
      <div className="image-gallery-container" data-testid="image-gallery">
        <div className="image-gallery">
          <img className="ig-main-image" src={photo} />
          <ImageGalleryBackArrow />
          <ImageGalleryForwardArrow />
          <ImageGalleryThumbnailColumn productStyles={productStyles} thumbnailClicked={this.thumbnailClicked} selected={this.state.selectedPhoto}/>
          <div className="image-gallery-fullscreen-toggle">
            <span className="material-icons">fullscreen</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageGallery;