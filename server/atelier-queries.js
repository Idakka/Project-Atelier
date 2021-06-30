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

const postInteraction = (interaction, headers) => {
  return axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions', interaction, headers)
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
};

const getCurrentProductBundle = (productId, headers) => {
  let currentProduct = {};
  console.time('getCurrentProductBundle API Time');
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
      console.timeEnd('getCurrentProductBundle API Time');
      return {
        ...responses[0],
        styles: [ ...responses[1] ],
        // This is to remove any duplicates from the related products array
        related: [ ...new Set(responses[2]) ],
        reviews: { ...responses[3] },
        reviewsMeta: { ...responses[4] },
        questions: [ ...responses[5] ],
      };
    });
};

const getRelatedProductsBundle = (relatedProducts, headers) => {
  console.time('getRelatedProductsBundle API Time');
  const allRelatedProductCalls = [];
  for (let i = 0; i < relatedProducts.length; i++) {
    const relatedProduct = {};
    const relatedProductCalls = [
      getProductInfo(relatedProducts[i], headers),
      getProductStyles(relatedProducts[i], headers),
      getProductReviewsMeta(relatedProducts[i], headers)
    ];
    allRelatedProductCalls.push(Promise.all(relatedProductCalls)
      .then(responses => {
        return {
          ...responses[0],
          styles: [ ...responses[1] ],
          reviewsMeta: { ...responses[2] },
        };
      })
    );
  }
  return Promise.all(allRelatedProductCalls)
    .then(responses => {
      console.timeEnd('getRelatedProductsBundle API Time');
      const allRelatedProductsBundle = {};
      for (let i = 0; i < relatedProducts.length; i++) {
        allRelatedProductsBundle[relatedProducts[i]] = responses[i];
      }
      return allRelatedProductsBundle;
    });
};

const postCart = (skuId, headers) => {
  console.log('In atelier-queries, skuId: ', skuId)
  return axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart', skuId, headers)
    .then(result => result.data)
    .catch(err => {
      throw err;
    });
};

module.exports = {
  // Multi-purpose functions
  getCurrentProductBundle,
  getRelatedProductsBundle,
  // Single-purpose functions
  getProductQuestions,
  getProductReviews,
  getProductReviewsMeta,
  postInteraction,
  postCart
};
