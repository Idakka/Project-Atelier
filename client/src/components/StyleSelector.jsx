import React from 'react';

var StyleSelector = function(props) {
  return (
    <React.Fragment>
      <div className="style-selector-header">
        <span className="style-label">STYLE &gt;</span> SELECTED STYLE
      </div>
      <div>
        <img src='img/style_placeholder.png' />
      </div>
    </React.Fragment>
  );
};

export default StyleSelector;