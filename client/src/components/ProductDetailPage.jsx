import React from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import RelatedItemsAndOutfit from './RelatedItemsAndOutfit.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews.jsx';
import { productInfoMock, relatedProductsMock, productStylesMock, productsMock } from '../mockData/productInfoMock.js';
import { reviewsMock, reviewsMetaMock } from '../mockData/reviewsMock.js';
import { questionsMock, answersMock } from '../mockData/questionsMock.js';
import { cartMock } from '../mockData/cartMock.js';

const port = window.location.port;

class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageFile: null
    };
    this.onChangeFileHandler = this.onChangeFileHandler.bind(this);
    this.onClickUploadHandler = this.onClickUploadHandler.bind(this);
  }

  componentDidMount() {
    // Start sending off axios calls and populate state with the returns.
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

  render() {
    return (
      <React.Fragment>
        <Overview />
        <RelatedItemsAndOutfit />
        <QuestionsAndAnswers />
        <RatingsAndReviews onChangeFileHandler={this.onChangeFileHandler} onClickUploadHandler={this.onClickUploadHandler} />
      </React.Fragment>
    );
  }
}

export default ProductDetailPage;