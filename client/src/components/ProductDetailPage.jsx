import React from 'react';
import Overview from './Overview.jsx';
import RelatedItemsAndOutfit from './RelatedItemsAndOutfit.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews.jsx';
import Modal from './Modal.jsx';

class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalContents: <div>Error: Modal displayed before it was populated.<br />Maybe you didn't pass anything to showModal?</div>
    }
  }

  componentDidMount() {
    // Start sending off Axios calls and populate state with the returns.
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
        <Overview top={this}/>
        <RelatedItemsAndOutfit />
        <QuestionsAndAnswers />
        <RatingsAndReviews />
        <Modal top={this} contents={this.state.modalContents}/>
      </React.Fragment>
    );
  }
}

export default ProductDetailPage;