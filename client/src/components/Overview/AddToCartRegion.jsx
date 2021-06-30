import React from 'react';
import ExampleModalContents from '../ExampleModalContents.jsx';

class AddToCartRegion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: ['-']
    };
  };

  componentDidMount() {
    document.getElementById('add-to-bag-star-button').addEventListener('click', (event) => {
      this.props.top.showModal(<ExampleModalContents top={this.props.top} />);
    });
    document.getElementById('add-to-bag-size-selector').addEventListener('change', (event) => {
      let { skus } = this.props.productStyles.results[this.props.selectedStyle];
      let sizeSelector = document.getElementById('add-to-bag-size-selector');
      let selectedSize = sizeSelector.value;
      let selectedSku = sizeSelector.options[sizeSelector.selectedIndex].dataset.sku;
      console.log('Selected SKU: ', selectedSku);
      this.setState({ quantity: skus[selectedSku].quantity});
    });
  }

  render () {
    let { skus } = this.props.productStyles.results[this.props.selectedStyle];
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
          <div className="add-to-bag-box add-to-bag"><div>Add to Bag</div><div>+</div></div>
          <div id='add-to-bag-star-button' className="add-to-bag-box add-to-cart-star" data-testid="add-to-bag-star-button">
            <span className='material-icons'>star_rate</span>
          </div>
        </div>
      </React.Fragment>
    );
  };
};

export default AddToCartRegion;