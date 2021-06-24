import React from 'react';
import ImageGalleryThumbnail from './ImageGalleryThumbnail.jsx';
import ImageGalleryThumbnailColumnUpArrow from './ImageGalleryThumbnailColumnUpArrow.jsx';
import ImageGalleryThumbnailColumnDownArrow from './ImageGalleryThumbnailColumnDownArrow.jsx';

const IGTC_THUMBNAIL_HEIGHT = 75;

class ImageGalleryThumbnailColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { thumbnailPosition: 0 };
  }

  componentDidMount() {
    document.getElementById('ig-thumbnail-column-up-arrow').addEventListener('click', (event) => {
      let currentThumbnailPosition = this.state.thumbnailPosition;
      if (currentThumbnailPosition < this.props.productStyles.results[0].photos.length - 1) {
        this.setState({thumbnailPosition: currentThumbnailPosition + 1});
      }
    });
    document.getElementById('ig-thumbnail-column-down-arrow').addEventListener('click', (event) => {
      let currentThumbnailPosition = this.state.thumbnailPosition;
      if (currentThumbnailPosition > 0) {
        this.setState({thumbnailPosition: currentThumbnailPosition - 1});
      }
    });
  }

  render() {
    let index = 0;
    let thumbnails = this.props.productStyles.results[0].photos.map((style) => {
      index += 1;
      return <ImageGalleryThumbnail key={style.thumbnail_url} thumbnail_url={style.thumbnail_url} index={index - 1} gallery={this.props.gallery} />
    });

    return (
      <div className="ig-thumbnail-column" data-testid="ig-tc">
        <ImageGalleryThumbnailColumnUpArrow />
        <div className="ig-thumbnail-inner-container">
          <div className="igtc-sliding-inner-div" style={{ top: IGTC_THUMBNAIL_HEIGHT * -this.state.thumbnailPosition + 'px' }}>
            {thumbnails}
          </div>
        </div>
        <ImageGalleryThumbnailColumnDownArrow />
      </div>
    );
  }
};

export default ImageGalleryThumbnailColumn;