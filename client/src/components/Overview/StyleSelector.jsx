import React from 'react';
import StyleThumbnail from './StyleThumbnail.jsx';

var StyleSelector = function(props) {
  const rowSize = 3;
  let index = -1;
  let styleThumbnails = props.productStyles.results.map((style) => {
    index += 1;
    return <StyleThumbnail thumbnail_url={props.productStyles.results[index].photos[0].thumbnail_url} key={props.productStyles.results[index].photos[0].thumbnail_url}/>
  });
  let rows = [];
  for (var i = 0; i < styleThumbnails.length; i += rowSize) {
    // Extracting the relevent entries here with slice (shallow copy) doesn't work; a full copy and splice to trim does.
    let rowEntries = [...styleThumbnails];
    rowEntries.splice(0, i); // trim entries off the front
    if (styleThumbnails.length > i + rowSize) { rowEntries.splice(i + rowSize); } // trim entries off the end
    rows.push(<div className="row-of-style-thumbnails-container"><div className="row-of-style-thumbnails" children={rowEntries} key={Math.random()}></div></div>);
  }
  return (
    <React.Fragment>
      <div className="style-selector-header" data-testid='style-selector'>
        <span className="style-label">STYLE &gt;</span> SELECTED STYLE
      </div>
      <div>
        {rows}
      </div>
    </React.Fragment>
  );
};

export default StyleSelector;