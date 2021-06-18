import React, { useEffect, useState } from 'react';
import StarReview from '../StarReview.jsx';

import axios from 'axios';

const AddToOutfitCard = ({ currentProduct, onAction }) => {
  return (
    <div
      className="card card--add-to-outfit product"
      data-testid={`card--add-to-outfit`}
      onClick={() => onAction('add', currentProduct.id)}
    >
      <span className="material-icons add">add</span>
      <p className="product__name">Add To Outfit</p>
    </div>
  );
};

export default AddToOutfitCard;
