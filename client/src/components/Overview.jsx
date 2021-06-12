import React from 'react';
import TitleBar from './TitleBar.jsx';
import SiteWideAnnounce from './SiteWideAnnounce.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCartRegion from './AddToCartRegion.jsx';
import SalesPitch from './SalesPitch.jsx';

var Overview = function(props) {
  return (
    <div className='top-region max-width'>
      <TitleBar />
      <SiteWideAnnounce />
      <div className="overview-column-container">
        <ImageGallery />
        <div className="product-information">
          <ProductInformation productInfo={props.productInfo} reviewsMeta={props.reviewsMeta} />
          <StyleSelector />
          <AddToCartRegion top={props.top} />
        </div>
      </div>
      <SalesPitch productInfo={props.productInfo} />
    </div>
  );
};

export default Overview;