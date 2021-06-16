const axios = require('axios');

const getCurrentProduct = (productId, headers) => {
  let currentProduct = {};
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`, headers)
    .then(result => currentProduct = { ...result.data })
    .then(() => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/styles`, headers))
    .then(result => currentProduct = { ...currentProduct, styles: [ ...result.data.results ]})
    .then(() => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/related`, headers))
    .then(result => currentProduct = { ...currentProduct, related: [ ...result.data ] })
    .then(() => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${productId}`, headers))
    .then(result => currentProduct = { ...currentProduct, reviews: { ...result.data } })
    .then(() => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${productId}`, headers))
    .then(result => currentProduct = { ...currentProduct, reviewsMeta: { ...result.data } })
    .then(() => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${productId}`, headers))
    .then(result => currentProduct = { ...currentProduct, questions: { ...result.data.results } })
    .then(() => JSON.stringify(currentProduct))
    .catch(error => error);
};

module.exports = {
  getCurrentProduct
};
