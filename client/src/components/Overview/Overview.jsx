import React from 'react';
import TitleBar from './TitleBar.jsx';
import SiteWideAnnounce from './SiteWideAnnounce.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCartRegion from './AddToCartRegion.jsx';
import SalesPitch from './SalesPitch.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: 0,
      selectedPhoto: 0,
    };
    this.styleClickHandler = this.styleClickHandler.bind(this);
    this.thumbnailClicked = this.thumbnailClicked.bind(this);
    this.themeChange = this.themeChange.bind(this);
    this.nextPic = this.nextPic.bind(this);
    this.prevPic = this.prevPic.bind(this);
    this.currentTheme = "light";
  }

  styleClickHandler(event) {
    this.setState({ selectedStyle: event.target.dataset.style_id, selectedPhoto: 0 });
  }

  thumbnailClicked(event) {
    this.setState({ selectedPhoto: event.target.dataset.index});
  }

  nextPic(event) {
    // First make sure we've finished pulling from the API before trying to use the data there.
    if (this.props.productStyles) {
      if (this.state.selectedPhoto < this.props.productStyles[this.state.selectedPhoto].photos.length) {
        this.setState({ selectedPhoto: this.state.selectedPhoto + 1});
      }
    }
  }

  prevPic(event) {
    if (this.state.selectedPhoto > 0) {
      this.setState({ selectedPhoto: this.state.selectedPhoto - 1});
    }
  }

  themeChange(event) {
    if (this.currentTheme === 'light') {
      this.currentTheme = 'dark';
      document.getElementById('title-bar-theme-label').innerHTML = 'Dark Theme';
      document.documentElement.style.setProperty('--trueblack', '#fff');
      document.documentElement.style.setProperty('--nearblack', '#ccc');
      document.documentElement.style.setProperty('--black', '#aeadae');
      document.documentElement.style.setProperty('--pale', '#2c2c2c');
      document.documentElement.style.setProperty('--white', '#000');
      document.documentElement.style.setProperty('--lowlight', '#999');
      document.documentElement.style.setProperty('--midtone', '#808080');
      document.documentElement.style.setProperty('--truered', '#0ff');
      document.documentElement.style.setProperty('--gold', '#0029ff');
    } else {
      this.currentTheme = 'light';
      document.getElementById('title-bar-theme-label').innerHTML = 'Light Theme';
      document.documentElement.style.setProperty('--trueblack', '#000');
      document.documentElement.style.setProperty('--nearblack', '#333');
      document.documentElement.style.setProperty('--black', '#515251');
      document.documentElement.style.setProperty('--pale', '#D3D3D3');
      document.documentElement.style.setProperty('--white', '#fff');
      document.documentElement.style.setProperty('--lowlight', '#666');
      document.documentElement.style.setProperty('--midtone', '#808080');
      document.documentElement.style.setProperty('--truered', '#f00');
      document.documentElement.style.setProperty('--gold', '#ffd700');
    }
  }

  render() {
    let reviewsMeta = {};
    if (this.props.productInfo) {
      reviewsMeta = this.props.productInfo.reviewsMeta;
    }
    return (
      <div className='top-region max-width'>
        <TitleBar themeChange={this.themeChange}/>
        <SiteWideAnnounce />
        <div className="overview-column-container">
          <ImageGallery
            productStyles={this.props.productStyles}
            overview={this}
            thumbnailClicked={this.thumbnailClicked}
            nextPic={this.nextPic}
            prevPic={this.prevPic}
          />
          <div className="product-information">
            <ProductInformation
              productInfo={this.props.productInfo}
              productStyles={this.props.productStyles}
            />
            <StyleSelector
              productStyles={this.props.productStyles}
              overview={this}
            />
            <AddToCartRegion
              top={this.props.top}
              productStyles={this.props.productStyles}
              selectedStyle={this.state.selectedStyle}
            />
          </div>
        </div>
        <SalesPitch productInfo={this.props.productInfo} />
      </div>
    );
  }
}

export default Overview;