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
        <ImageGallery productStyles={props.productStyles}/>
        <div className="product-information">
          <ProductInformation productInfo={props.productInfo} productStyles={props.productStyles} reviewsMeta={props.reviewsMeta} />
          <StyleSelector productStyles={props.productStyles} />
          <AddToCartRegion top={props.top} />
        </div>
      </div>
      <SalesPitch productInfo={props.productInfo} />
    </div>
  );
};

export default Overview;