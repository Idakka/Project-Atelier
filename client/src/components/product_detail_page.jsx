import React from 'react';
import Axios from 'axios';
import Overview from './overview.jsx';
import RelatedItemsAndOutfit from './RelatedItemsAndOutfit.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews.jsx';
const port = 1234;

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
    // Start sending off Axios calls and populate state with the returns.
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
    Axios.post(`http://localhost:${port}/upload`, data, {
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