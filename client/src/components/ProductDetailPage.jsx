import React from 'react';
import axios from 'axios';
import Overview from './Overview/Overview.jsx';
import RelatedItemsAndOutfit from './RelatedItemsAndOutfit/RelatedItemsAndOutfit.jsx';
import QuestionsAndAnswers from './QA/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import ClickTracker from './ClickTracker.jsx';
import { productInfoMock, relatedProductsMock, productStylesMock, productsMock } from '../mockData/productInfoMock.js';
import { reviewsMock, reviewsMetaMock } from '../mockData/reviewsMock.js';
import { questionsMock, answersMock } from '../mockData/questionsMock.js';
import { cartMock } from '../mockData/cartMock.js';
import Modal from './Modal.jsx';
const port = window.location.port;

// Wrapped components for tracking
const OverviewWithTracking = ClickTracker(Overview);
const RelatedItemsAndOutfitWithTracking = ClickTracker(RelatedItemsAndOutfit);
const QuestionsAndAnswersWithTracking = ClickTracker(QuestionsAndAnswers);
const RatingsAndReviewsWithTracking = ClickTracker(RatingsAndReviews);

class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Product Information
      currentProductId: 22126, // this should be set at runtime by the productId in the url? or if none given, has a default
      relatedProducts: [],
      products: {
        // mock products until successful API calls
        '22126': productsMock
        // productId: { ... },
      },
      yourOutfit: JSON.parse(localStorage.getItem('atelier-your-outfit')) || [],
      // Software Information
      modalContents: <div>Error: Modal displayed before it was populated.<br />Maybe you didn't pass anything to showModal?</div>,
      selectedImageFiles: [],
      fileLoaded: 0
    };
  }

  componentDidMount() {
    // Load default product info on page load
    this.loadProductInfo();
  }

  changeCurrentProduct(productId) {
    // Do the following when changing the current product in state
    this.setState({
      currentProductId: productId
    });
    this.loadProductInfo(productId);
  }

  getCurrentProductFromAPI(productId) {
    return axios.get(`/products/current?id=${productId}`)
      .then(response => response.data);
  }

  getCurrentProductStylesFromAPI(productId) {
    return axios.get(`/products/styles?id=${productId}`)
      .then((response => response.data))
      .then(styles => {this.setState({productStyles: styles})});
  }

  getListOfProductsFromAPI(listOfProducts) {
    const productsWithoutInfo = listOfProducts.filter(product => this.state.products[product] === undefined);
    if (productsWithoutInfo.length !== 0) {
      return axios.get(`/products/related?ids=${productsWithoutInfo.join(',')}`)
        .then(response => response.data);
    } else {
      return new Promise([]);
    }
  }

  loadProductInfo(productId = this.state.currentProductId) {
    this.setState({
      currentProductId: productId
    });
    // set currentProductId based on URL or default
    const updatedProducts = { ...this.state.products };
    this.getCurrentProductStylesFromAPI(this.state.currentProductId);
    this.getCurrentProductFromAPI(productId)
      .then(productInformation => {
        updatedProducts[productId] = productInformation;
        this.setState({
          products: {
            ...this.state.products,
            ...updatedProducts
          }
        });
        // make axios calls for all related products and update this.state.products
        return this.getListOfProductsFromAPI(updatedProducts[productId].related);
      })
      .then(relatedProductsInformation => {
        for (const product in relatedProductsInformation) {
          updatedProducts[product] = relatedProductsInformation[product];
        }
        this.setState({
          products: {
            ...this.state.products,
            ...updatedProducts
          },
          relatedProducts: updatedProducts[productId].related || []
        });
        return this.getListOfProductsFromAPI(this.state.yourOutfit);
      })
      .then(outfitProducts => {
        for (const product in outfitProducts) {
          updatedProducts[product] = outfitProducts[product];
        }
        this.setState({
          products: {
            ...this.state.products,
            ...updatedProducts
          },
          yourOutfit: yourOutfit,
        }, () => {
        });
      })
      .catch(err => err);
  }

  onOutfitChange(changeType, productId) {
    let updatedOutfit = this.state.yourOutfit;
    if (changeType === 'add') {
      updatedOutfit = updatedOutfit.concat(productId);
    } else { // if it is remove
      updatedOutfit = updatedOutfit.filter(existingProductId => existingProductId !== productId);
    }
    this.setState({
      yourOutfit: [ ...new Set(updatedOutfit) ]
    }, () => {
      localStorage.setItem('atelier-your-outfit', JSON.stringify(this.state.yourOutfit));
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
        <OverviewWithTracking
          top={this}
          productInfo={this.state.products[this.state.currentProductId]}
          productStyles={this.state.productStyles}
          reviewsMeta={reviewsMetaMock}
        />
        <RelatedItemsAndOutfitWithTracking
          top={this}
          product={this.state.products[this.state.currentProductId]}
          relatedProducts={this.state.relatedProducts.map(productId => this.state.products[productId])}
          outfitProducts={this.state.yourOutfit.map(productId => this.state.products[productId])}
        />
        <QuestionsAndAnswersWithTracking
          questionsInfo={questionsMock}
          productInfo={productInfoMock}
          currentProductId={this.state.currentProductId}
        />
        <RatingsAndReviewsWithTracking
          top={this}
          // onChangeFileHandler={this.onChangeFileHandler}
          // onClickUploadHandler={this.onClickUploadHandler}
          productId={this.state.currentProductId}
          currentProduct={this.state.products[this.state.currentProductId]}
          reviews={reviewsMock.results}
          reviewsMeta={reviewsMetaMock}
        />
        <Modal top={this} contents={this.state.modalContents}/>
      </React.Fragment>
    );
  }
}

export default ProductDetailPage;