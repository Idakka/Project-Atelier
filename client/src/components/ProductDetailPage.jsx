import React from 'react';
import Overview from './Overview.jsx';
import RelatedItemsAndOutfit from './RelatedItemsAndOutfit.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews.jsx';
import Modal from './Modal.jsx';

class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Start sending off Axios calls and populate state with the returns.
  }

  showModal() {
    console.log('Show the modal!');
    document.getElementById('the_modal').style.visibility = 'visible';
  }

  hideModal() {
    console.log('hide the modal!');
    document.getElementById('the_modal').style.visibility = 'hidden';
  }

  render() {
    return (
      <React.Fragment>
        <Overview top={this}/>
        <RelatedItemsAndOutfit />
        <QuestionsAndAnswers />
        <RatingsAndReviews />
        <Modal top={this} />
      </React.Fragment>
    );
  }
}

export default ProductDetailPage;