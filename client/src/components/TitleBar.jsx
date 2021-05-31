import React from 'react';

var TitleBar = function(props) {
  return (
    <div className="title-bar">
      <span className="title">Logo</span>
      <input type="text" default="________" id="title_bar_search" />
      <span className="material-icons-outlined">search</span>

    </div>
  );
};

export default TitleBar;