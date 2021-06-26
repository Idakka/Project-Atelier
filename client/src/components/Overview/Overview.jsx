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
      selectedPhoto: 0
    };
    this.styleClickHandler = this.styleClickHandler.bind(this);
    this.thumbnailClicked = this.thumbnailClicked.bind(this);
  }

  styleClickHandler(event) {
    this.setState({ selectedStyle: event.target.dataset.style_id, selectedPhoto: 0 });
  }

  thumbnailClicked(event) {
    this.setState({ selectedPhoto: event.target.dataset.index});
  }

  render() {
    return (
      <div className='top-region max-width'>
        <TitleBar />
        <SiteWideAnnounce />
        <div className="overview-column-container">
          <ImageGallery productStyles={this.props.productStyles} overview={this} thumbnailClicked={this.thumbnailClicked}/>
          <div className="product-information">
            <ProductInformation productInfo={this.props.productInfo} productStyles={this.props.productStyles} reviewsMeta={this.props.reviewsMeta} />
            <StyleSelector productStyles={this.props.productStyles} overview={this} />
            <AddToCartRegion top={this.props.top} />
          </div>
        </div>
        <SalesPitch productInfo={this.props.productInfo} />
      </div>
    );
  }
}

export default Overview;