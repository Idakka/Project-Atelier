import React from 'react';

var AddToCartRegion = function(props) {
  return (
    <React.Fragment>
      <div className="add-to-bag-row">
        <select className="add-to-bag-box size-select">
          <option>Foo</option>
          <option>Bar</option>
          <option>Baz</option>
          <option>Qux</option>
          <option>Quux</option>
        </select>
        <select className="add-to-bag-box quantity-select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        </div>
        <div className="add-to-bag-row">
          <div className="add-to-bag-box add-to-bag"><div>Add to Bag</div><div>+</div></div>
          <div className="add-to-bag-box add-to-cart-star"><span className='material-icons'>star_rate</span></div>
        </div>
    </React.Fragment>
  );
};

export default AddToCartRegion;