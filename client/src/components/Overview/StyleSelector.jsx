import React from 'react';
import StyleThumbnail from './StyleThumbnail.jsx';

var StyleSelector = function(props) {
  let productStyles = props.productStyles ? props.productStyles : [];
  const rowSize = 4;
  let index = -1;
  let styleThumbnails = productStyles.map((style) => {
    index += 1;
    return <StyleThumbnail thumbnail_url={props.productStyles[index].photos[0].thumbnail_url} styleID={index} key={props.productStyles[index].photos[0].thumbnail_url} styleClickHandler={props.overview.styleClickHandler}/>;
  });
  let rows = [];
  for (var i = 0; i < styleThumbnails.length; i += rowSize) {
    // Extracting the relevent entries here with slice (shallow copy) doesn't work; a full copy and splice to trim does.
    let rowEntries = [...styleThumbnails];
    rowEntries.splice(0, i); // trim entries off the front
    if (styleThumbnails.length > i + rowSize) { rowEntries.splice(i + rowSize); } // trim entries off the end
    rows.push(<div className="row-of-style-thumbnails-container" key={Math.random()}><div className="row-of-style-thumbnails" children={rowEntries}></div></div>);
  }
  let styleName = 'SELECTED STYLE';
  if (productStyles[props.overview.state.selectedStyle]) {
    styleName = productStyles[props.overview.state.selectedStyle].name;
  }
  return (
    <React.Fragment>
      <div className="style-selector-header" data-testid='style-selector'>
        <span className="style-label">STYLE &gt;</span> {styleName}
      </div>
      <div>
        {rows}
      </div>
    </React.Fragment>
  );
};

export default StyleSelector;