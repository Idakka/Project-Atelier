import React from 'react';
import TitleBar from './TitleBar.jsx';
import SiteWideAnnounce from './SiteWideAnnounce.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCartRegion from './AddToCartRegion/jsx';
import SalesPitch from './SalesPitch.jsx';

var Overview = function(props) {
  return (
    <div className='top-region max-width'>
      <TitleBar />
      <SiteWideAnnounce />
      <div className="column-container">
        <div className="horizontal-block">
          <ImageGallery />
          <div className="right-column">
            <ProductInformation />
            <StyleSelector />
            <AddToCartRegion />
          </div>
        </div>
        <SalesPitch />
      </div>
    </div>
  );
};

export default Overview;