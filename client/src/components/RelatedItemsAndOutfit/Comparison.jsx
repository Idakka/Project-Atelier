import React from 'react';

const Comparison = ({ top, currentProduct, comparisonProduct }) => {
  return (
    <React.Fragment>
      <h1>Example Modal Window</h1>
      <button
        id='default-modal-close-button'
        data-testid="example-modal-close-button"
        onClick={() => top.hideModal()}
      >
        Click to hide modal.
      </button>
    </React.Fragment>
  );
};

export default Comparison;
