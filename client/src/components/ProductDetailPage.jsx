import React from 'react';
import Overview from './Overview.jsx';
import RelatedItemsAndOutfit from './RelatedItemsAndOutfit.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews.jsx';

class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Start sending off Axios calls and populate state with the returns.
  }

  render() {
    return (
      <React.Fragment>
        <Overview />
        <RelatedItemsAndOutfit />
        <QuestionsAndAnswers />
        <RatingsAndReviews />
      </React.Fragment>
    );
  }
}

export default ProductDetailPage;