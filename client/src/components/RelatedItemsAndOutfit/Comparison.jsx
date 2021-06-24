import React from 'react';

const Comparison = ({ top, currentProduct, relatedProduct }) => {
  return (
    <React.Fragment>
      <h3>Comparing</h3>
      <div className="comparison__product-titles">
        <h2>Current Product Name</h2>
        <h2>Related Product Name</h2>
      </div>
      <div className="comparison-characteristics">
        {/* For each characteristic up to X amount */}
        <div className="comparison-characteristics__row">
          <div className="comparison-characteristics__current">
            {true && (
              <span className="material-icons check">check</span>
            )}
          </div>
          <div className="comparison-characteristics__characteristic">Product Characteristic</div>
          <div className="comparison-characteristics__related">
            {true && (
              <span className="material-icons check">check</span>
            )}
          </div>
        </div>
      </div>
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
