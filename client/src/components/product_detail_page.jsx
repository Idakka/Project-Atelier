import React from 'react';
import Overview from './overview.jsx';
import RelatedItemsAndComparisons from './related_items_and_comparisons.jsx';
import QnA from './q_n_a.jsx';
import RatingsAndReviews from './ratings_and_reviews.jsx';

class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    // Start sending off Axios calls and populate state with the returns.
  };

  render() {
    return() {(
      <React.Fragment>
        <Overview />
        <RelatedItemsAndComparisons />
        <QnA />
        <RatingsAndReviews />
      </React.Fragment>
    )};
  };
}

export default ProductDetailPage;