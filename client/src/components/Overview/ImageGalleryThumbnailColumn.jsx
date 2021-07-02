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
    let { selectedStyle, productStyles = {} } = this.props;
    let target = Number(this.props.selected);
    let index = -1;
    let thumbnails = [];
    if (productStyles[selectedStyle]) {
      thumbnails = productStyles[selectedStyle].photos.map((style) => {
        index += 1;
        if (index === target) {
          return <ImageGalleryThumbnail key={style.thumbnail_url} thumbnail_url={style.thumbnail_url} index={index} thumbnailClicked={this.props.thumbnailClicked} selected={true} />;
        } else {
          return <ImageGalleryThumbnail key={style.thumbnail_url} thumbnail_url={style.thumbnail_url} index={index} thumbnailClicked={this.props.thumbnailClicked} />;
        }
      });
    }

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