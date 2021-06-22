import React from 'react';

class ImageGalleryThumbnail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementById('igthumb-' + this.props.index).addEventListener('click', (event) => {
      this.props.gallery.setState({ selectedPhoto: this.props.index })
    });
  }

  render() {
    if (this.props.selected) {
      return (
        <React.Fragment>
          <div className='image-gallery-thumbnail'>
            <img src={this.props.thumbnail_url} className="ig-thumbnail" id={'igthumb-' + this.props.index}/>
            <hr className='three-px-hr'/>
          </div>
        </React.Fragment>
      );
    } else return (
      <div className='image-gallery-thumbnail'>
        <img src={this.props.thumbnail_url} className="ig-thumbnail" id={'igthumb-' + this.props.index}/>
      </div>
    );
  }
};

export default ImageGalleryThumbnail;