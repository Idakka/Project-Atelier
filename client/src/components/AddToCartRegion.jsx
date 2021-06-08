import React from 'react';
import ExampleModalContents from './ExampleModalContents.jsx';

class AddToCartRegion extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    document.getElementById('add-to-bag-star-button').addEventListener('click', (event) => {
      this.props.top.showModal(<ExampleModalContents top={this.props.top} />);
    });
  }

  render () {
    return (
      <React.Fragment>
        <div className="add-to-bag-row" data-testid="add-to-cart-region">
          <select className="add-to-bag-box size-select">
            <option>SELECT SIZE</option>
            <option>WEE</option>
            <option>MIDDLIN</option>
            <option>BIGGUN</option>
            <option>LAWD HE COMIN</option>
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
          <div id='add-to-bag-star-button' className="add-to-bag-box add-to-cart-star">
            <span className='material-icons'>star_rate</span>
          </div>
        </div>
      </React.Fragment>
    );
  };
};

export default AddToCartRegion;