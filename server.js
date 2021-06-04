const axios = require('axios');
const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const port = 1234;
axios.defaults.headers.common['Authorization'] = process.env.GITHUB_TOKEN;

const pathname = path.join(__dirname, 'public');
app.use(express.static(pathname));

app.get('/', (req, res) => {
  res.send('hello world from server!');
});

app.get('/products/:product_id/related', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.params.product_id}/related`)
    .then(response => response.data)
    .then(relatedItems => {
      const promises = [];
      relatedItems.forEach((item) => {
        promises.push(axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${item}`));
      });
      return Promise.all(promises);
    })
    .then(items => {
      const itemsData = [];
      items.forEach(item => {
        itemsData.push(item.data);
      });
      res.end(JSON.stringify(itemsData));
    })
    .catch(err => res.end(JSON.stringify(err)));
});

app.get('/products/:product_id/card-info', (req, res) => {
  // REVIEWS
  // get average review

  // let rating = 0;
  // get all reviews
    // reduce all reviews to the average
    // set rating to average review

  // STYLES
  // get picture of default style
  // get original price
  // get sale price

  // let pictureURL, originalprice, saleprice
  // get all styles
    // reduce down to the default style
    // set picture URL to default style picture 0
    // set original price to original price
    // set sale price to sale price

  // package into obj
  // send back

  // put together, send off
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
