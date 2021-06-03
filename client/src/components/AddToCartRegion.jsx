import React from 'react';

var AddToCartRegion = function(props) {
  return (
    <React.Fragment>
      <div className="add-to-bag-row">
        <select className="add-to-bag-box">
          <option>Foo</option>
          <option>Bar</option>
          <option>Baz</option>
          <option>Qux</option>
          <option>Quux</option>
        </select>
        <select className="add-to-bag-box">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        </div>
        <div className="add-to-bag-row">
          <div className="add-to-bag-box">Add to Bag +</div>
          <div className="add-to-bag-box"><span className='material-icons'>star_rate</span></div>
        </div>
    </React.Fragment>
  );
};

export default AddToCartRegion;