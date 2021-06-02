import React from 'react';

var TitleBar = function(props) {
  return (
    <div className="title-bar">
      <div className="logo">Logo</div>
      <div className="titlebar-search">
        <input type="text" default="________" id="title_bar_search" />
        <span className="material-icons-outlined">search</span>
      </div>
    </div>
  );
};

export default TitleBar;