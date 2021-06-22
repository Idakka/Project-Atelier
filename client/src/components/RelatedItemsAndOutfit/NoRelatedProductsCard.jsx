import React, { useEffect, useState } from 'react';
import StarReview from '../StarReview.jsx';

import axios from 'axios';

const NoRelatedProductsCard = ({ currentProduct, onAction }) => {
  return (
    <div
      className="card card--meta card--no-related-products"
      data-testid="card--no-related-products"
    >
      <div className="card__contents">
        <span className="material-icons account_tree">account_tree</span>
        <p className="product__name">No Related<br/>Products Found</p>
      </div>
    </div>
  );
};

export default NoRelatedProductsCard;
