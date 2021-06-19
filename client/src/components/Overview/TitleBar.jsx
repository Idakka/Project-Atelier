import React from 'react';

var TitleBar = function(props) {
  return (
    <div className="title-bar">
      <div className="logo">Logo</div>
      <div className="titlebar-search">
        <input type="text" default="________" id="title_bar_search" name="product_search"/>
        <label for="product_search"><span className="material-icons">search</span></label>
      </div>
    </div>
  );
};

export default TitleBar;