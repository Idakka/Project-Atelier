import React, { useEffect, useState } from 'react';
import StarReview from '../StarReview.jsx';

import axios from 'axios';

const AddToOutfitCard = ({ currentProduct, onAction }) => {
  return (
    <div
      className="card card--meta card--add-to-outfit"
      data-testid="card--add-to-outfit"
      onClick={() => onAction('add', currentProduct.id)}
    >
      <div className="card__contents">
        <span className="material-icons post_add">post_add</span>
        <p className="product__name">Add To Outfit</p>
      </div>
    </div>
  );
};

export default AddToOutfitCard;
