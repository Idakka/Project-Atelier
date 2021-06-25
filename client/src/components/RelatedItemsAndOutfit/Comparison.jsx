import React from 'react';

const Comparison = ({ top, currentProduct, relatedProduct }) => {
  const traits = {};
  currentProduct.features.forEach(currentFeature => {
    traits[currentFeature.feature] = {
      current: currentFeature.value,
      related: relatedProduct.features.reduce((acc, relatedFeature) => {
        if (acc) {
          return acc;
        }
        if (relatedFeature.feature === currentFeature.feature) {
          return relatedFeature.value;
        }
      }, null),
    };
  });
  relatedProduct.features.forEach(relatedFeature => {
    if (traits[relatedFeature.feature]) {
      return;
    }
    traits[relatedFeature.feature] = {
      related: relatedFeature.value,
      current: currentProduct.features.reduce((acc, currentFeature) => {
        if (acc) {
          return acc;
        }
        if (currentFeature.feature === relatedFeature.feature) {
          return currentFeature.value;
        }
      }, null),
    };
  });

  return (
    <div className="comparison__wrapper" data-testid="comparison">
      <h3 className="comparison__title">Comparing</h3>
      <div className="comparison__product-titles">
        <h3 className="comparison__product-title" data-testid="comparison--current-title">Current Product Name</h3>
        <h3 className="comparison__product-title" data-testid="comparison--related-title">Related Product Name</h3>
      </div>
      <div className="comparison-characteristics">
        {Object.keys(traits).map((trait, index) => {
          return (
            <div key={index} className="comparison-characteristics__row">
              <div className="comparison-characteristics__current" data-testid="comparison-characteristics__current">
                {/* If current has the trait and it is boolean, add the check. or if current is a string, add it */}
                {traits[trait].current && typeof traits[trait].current === 'boolean' ? (
                  <span className="material-icons check" data-testid='comparison--boolean-trait'>check</span>
                ) : (
                  <span data-testid='comparison--trait-value'>{traits[trait].current}</span>
                )}
              </div>
              <div className="comparison-characteristics__characteristic" data-testid="comparison-characteristics__characteristic">{trait}</div>
              <div className="comparison-characteristics__related" data-testid="comparison-characteristics__related">
                {/* If related has the trait and it is boolean, add the check. or if related is a string, add it */}
                {traits[trait].related && typeof traits[trait].related === 'boolean' ? (
                  <span className="material-icons check" data-testid='comparison--boolean-trait'>check</span>
                ) : (
                  <span data-testid='comparison--trait-value'>{traits[trait].related}</span>
                )}
              </div>
            </div>
          );
        })}
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
