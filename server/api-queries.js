const axios = require('axios');

// Returns the product info as an object
const getProductInfo = (productId, headers) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`, headers)
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
};

// Returns the styles as an array
const getProductStyles = (productId, headers) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/styles`, headers)
    .then(result => result.data.results)
    .catch(err => {
      throw err;
    });
};

// Returns the related products as an array
const getRelatedProducts = (productId, headers) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/related`, headers)
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
};

// Returns the entire response as an object, including page, count, etc.
const getProductReviews = (productId, headers) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${productId}`, headers)
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
};

// Returns the entire response as an object
const getProductReviewsMeta = (productId, headers) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${productId}`, headers)
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
};

// Returns the questions as an array
const getProductQuestions = (productId, headers) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${productId}`, headers)
    .then(result => result.data.results)
    .catch(err => {
      throw err;
    });
};

const getCurrentProduct = (productId, headers) => {
  let currentProduct = {};
  console.time('getCurrentProduct API Time');
  const allCalls = [
    getProductInfo(productId, headers),
    getProductStyles(productId, headers),
    getRelatedProducts(productId, headers),
    getProductReviews(productId, headers),
    getProductReviewsMeta(productId, headers),
    getProductQuestions(productId, headers),
  ];
  return Promise.all(allCalls)
    .then(responses => {
      console.timeEnd('getCurrentProduct API Time');
      return {
        ...responses[0],
        styles: [ ...responses[1] ],
        related: [ ...responses[2] ],
        reviews: { ...responses[3] },
        reviewsMeta: { ...responses[4] },
        questions: [ ...responses[5] ],
      };
    });
};

module.exports = {
  getCurrentProduct
};
