import React from 'react';

const Comparison = ({ top, currentProduct, relatedProduct }) => {
  return (
    <div className="comparison__wrapper">
      <h3 className="comparison__title">Comparing</h3>
      <div className="comparison__product-titles">
        <h3 className="comparison__product-title">Current Product Name</h3>
        <h3 className="comparison__product-title">Related Product Name</h3>
      </div>
      <div className="comparison-characteristics">
        {[1,2,3].map(trait => (
          <div className="comparison-characteristics__row">
            <div className="comparison-characteristics__current">
              {/* If current has the trait, add the check */}
              {true && (
                <span className="material-icons check">check</span>
              )}
            </div>
            <div className="comparison-characteristics__characteristic">Product Characteristic</div>
            <div className="comparison-characteristics__related">
              {/* If related has the trait, add the check */}
              {true && (
                <span className="material-icons check">check</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <button
        id='default-modal-close-button'
        data-testid="example-modal-close-button"
        onClick={() => top.hideModal()}
      >
        Click to hide modal.
      </button>
    </div>
  );
};

export default Comparison;
