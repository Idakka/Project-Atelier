import React from 'react';
import axios from 'axios';
import ExampleModalContents from '../ExampleModalContents.jsx';

class AddToCartRegion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: ['-']
    };
  };

  getSelectedSku() {
    let { skus } = this.props.productStyles[this.props.selectedStyle];
    let sizeSelector = document.getElementById('add-to-bag-size-selector');
    let selectedSize = sizeSelector.value;
    return sizeSelector.options[sizeSelector.selectedIndex].dataset.sku;
  }

  componentDidMount() {
    document.getElementById('add-to-bag-star-button').addEventListener('click', (event) => {
      this.props.top.showModal(<ExampleModalContents top={this.props.top} />);
    });
    document.getElementById('add-to-bag-size-selector').addEventListener('change', (event) => {
      let { skus } = this.props.productStyles[this.props.selectedStyle];
      let selectedSku = this.getSelectedSku();
      this.setState({ quantity: skus[selectedSku].quantity});
    });
    document.getElementById('add-to-bag-submit-button').addEventListener('click', (event) => {
      let selectedSku = this.getSelectedSku();
      axios.post('/cart', { sku_id: selectedSku });
    });
  }

  render () {
    let { productStyles = [[]] } = this.props;
    let { skus = [] } = productStyles[this.props.selectedStyle];
    let sizes = [];
    let quantities = [];
    sizes.push(<option data-sku={''} key='placeholder'>SELECT SIZE</option>);
    for (const sku in skus) {
      sizes.push(<option key={skus[sku].size} data-sku={sku} >{skus[sku].size}</option>);
    }
    if (this.state.quantity === '-') {
      quantities.push(<option>-</option>);
    } else {
      let quantity = Math.min(this.state.quantity, 15);
      for (let i = 1; i <= quantity; i++) {
        quantities.push(<option key={i}>{i}</option>);
      }
    }

    return (
      <React.Fragment>
        <div className="add-to-bag-row" data-testid="add-to-cart-region">
          <select id='add-to-bag-size-selector' className="add-to-bag-box size-select">
            {sizes}
          </select>
          <select className="add-to-bag-box quantity-select">
            {quantities}
          </select>
        </div>
        <div className="add-to-bag-row">
          <div className="add-to-bag-box add-to-bag" id='add-to-bag-submit-button'><div>Add to Bag</div><div>+</div></div>
          <div id='add-to-bag-star-button' className="add-to-bag-box add-to-cart-star" data-testid="add-to-bag-star-button">
            <span className='material-icons'>star_rate</span>
          </div>
        </div>
      </React.Fragment>
    );
  };
};

export default AddToCartRegion;