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
  let rating = 0;
  let pictureURL = '';
  let originalPrice = 0;
  let salePrice = 0;

  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${req.params.product_id}&count=100`)
    .then(response => response.data)
    .then(reviews => (reviews.results.reduce((acc, review) => acc + review.rating, 0) / reviews.results.length))
    .then(averageRating => {
      // If no ratings exist, at least let it be a number
      rating = averageRating || 0;
    })
    .then(_ => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.params.product_id}/styles`))
    .then(response => response.data)
    .then(styles => styles.results.filter(style => style['default?'])[0] || styles.results[0])
    .then(defaultStyle => {
      pictureURL = defaultStyle.photos[0].url;
      originalPrice = defaultStyle.original_price;
      salePrice = defaultStyle.sale_price;
      return;
    })
    .then(_ => {
      const output = {
        'product_id': req.params.product_id,
        rating,
        pictureURL,
        originalPrice,
        salePrice
      };
      res.end(JSON.stringify(output));
    })
    .catch(err => res.end(JSON.stringify(err)));
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
