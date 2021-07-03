import React from 'react';
import VerticalRule from './VerticalRule.jsx';

var SalesPitch = function(props) {
  let { productInfo = {} } = props;
  let { description = 'DESCRIPTION', slogan = 'SLOGAN', features = [] } = productInfo;
  let checklistItems = features.map((feature) => {
    let innerText = feature.feature + ': ' + feature.value;
    return <div key={feature.feature}><span className="material-icons">done</span>{innerText}</div>;
  });
  if (productInfo) {
    return (
      <div className="overview-column-container">
        <div id="sales-pitch-paragraph">
          <h3>{slogan}</h3>
          <p>
            {description}
          </p>
        </div>
        <VerticalRule />
        <div className="sales-pitch-checklist">
          {checklistItems}
        </div>
      </div>
    );
  } else {
    return (
      <div>Loading Sales Details...</div>
    )
  }
};

export default SalesPitch;

