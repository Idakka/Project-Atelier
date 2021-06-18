import React from 'react';
import axios from 'axios';
import Overview from './Overview/Overview.jsx';
import RelatedItemsAndOutfit from './RelatedItemsAndOutfit/RelatedItemsAndOutfit.jsx';
import QuestionsAndAnswers from './QA/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import { productInfoMock, relatedProductsMock, productStylesMock, productsMock } from '../mockData/productInfoMock.js';
import { reviewsMock, reviewsMetaMock } from '../mockData/reviewsMock.js';
import { questionsMock, answersMock } from '../mockData/questionsMock.js';
import { cartMock } from '../mockData/cartMock.js';
import Modal from './Modal.jsx';
const port = window.location.port;

class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Product Information
      currentProductId: 22126, // this should be set at runtime by the productId in the url? or if none given, has a default
      relatedProducts: [],
      products: {
        // productId: { ... },
      },
      yourOutfit: JSON.parse(localStorage.getItem('atelier-your-outfit')) || [],
      // Software Information
      modalContents: <div>Error: Modal displayed before it was populated.<br />Maybe you didn't pass anything to showModal?</div>,
      selectedImageFile: null
    };
    this.onChangeFileHandler = this.onChangeFileHandler.bind(this);
    this.onClickUploadHandler = this.onClickUploadHandler.bind(this);
  }

  componentDidMount() {
    console.time('mounted => fetched');
    // set currentProductId based on URL or default
    const updatedProducts = { ...this.state.products };
    console.time('fetched current product');
    axios.get(`/products/current?id=${this.state.currentProductId}`)
      .then(response => response.data)
      .then(productInformation => {
        updatedProducts[this.state.currentProductId] = productInformation;
        this.setState({
          products: updatedProducts
        }, () => {
          console.timeEnd('fetched current product');
        });
        console.time('fetched related products');
        return axios.get(`/products/related?ids=${updatedProducts[this.state.currentProductId].related.join(',')}`);
      })
      .then(response => response.data)
      .then(relatedProductsInformation => {
        for (const product in relatedProductsInformation) {
          updatedProducts[product] = relatedProductsInformation[product];
        }
        this.setState({
          products: updatedProducts,
          relatedProducts: updatedProducts[this.state.currentProductId].related
        }, () => {
          console.timeEnd('fetched related products');
        });
        console.time('fetched your outfit products');
        return axios.get(`/products/related?ids=${this.state.yourOutfit.join(',')}`);
      })
      .then(response => response.data)
      .then(outfitProducts => {
        console.log(outfitProducts);
        for (const product in outfitProducts) {
          updatedProducts[product] = outfitProducts[product];
        }
        this.setState({
          products: updatedProducts,
        }, () => {
          console.timeEnd('fetched your outfit products');
        });
      })
      .catch(err => {
        console.error(err);
      });
    // make axios calls for all related products and update this.state.products
  }

  onOutfitChange(changeType, productId) {
    let updatedOutfit = this.state.yourOutfit;
    if (changeType === 'add') {
      updatedOutfit = updatedOutfit.concat(productId);
    } else { // if it is remove
      updatedOutfit = updatedOutfit.filter(existingProductId => existingProductId !== productId);
    }
    updatedOutfit = [ ...new Set(this.state.yourOutfit) ];
    this.setState({
      yourOutfit: updatedOutfit
    }, () => {
      localStorage.setItem('atelier-your-outfit', JSON.stringify(updatedOutfit));
    });
  }

  onChangeFileHandler(event) {
    this.setState({
      selectedImageFile: event.target.files[0],
      fileLoaded: 0
    });
  }

  onClickUploadHandler() {
    const data = new FormData();
    data.append('file', this.state.selectedImageFile);
    axios.post(`http://localhost:${port}/upload`, data, {
    })
      .then(response => {
        console.log('successful upload: ', response);
      });
  }

  showModal(component) {
    this.setState({modalContents: component});
    document.getElementById('the_modal').style.visibility = 'visible';
  }

  hideModal() {
    document.getElementById('the_modal').style.visibility = 'hidden';
  }

  render() {
    return (
      <React.Fragment>
        <Overview top={this} productInfo={productInfoMock} productStyles={productStylesMock} reviewsMeta={reviewsMetaMock}/>
        <RelatedItemsAndOutfit
          top={this}
          product={this.state.products[this.state.currentProductId]}
          relatedProducts={this.state.relatedProducts.map(productId => this.state.products[productId])}
          outfitProducts={this.state.yourOutfit.map(productId => this.state.products[productId])}
        />
        <QuestionsAndAnswers productInfo={productInfoMock}/>
        <RatingsAndReviews onChangeFileHandler={this.onChangeFileHandler} onClickUploadHandler={this.onClickUploadHandler} productId={reviewsMock.product} reviews={reviewsMock.results} reviewsMeta={reviewsMetaMock}/>
        <Modal top={this} contents={this.state.modalContents}/>
      </React.Fragment>
    );
  }
}

export default ProductDetailPage;