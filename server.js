const axios = require('axios');
const dotenv = require('dotenv').config({path: __dirname + '/.env'});
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 1234;

const getInfo22122 = require('./public/dummy-data/get.product-information-22122.json');
const getInfo22123 = require('./public/dummy-data/get.product-information-22123.json');
const getInfo22124 = require('./public/dummy-data/get.product-information-22124.json');
const getInfo22128 = require('./public/dummy-data/get.product-information-22128.json');
const getInfo22129 = require('./public/dummy-data/get.product-information-22129.json');

const getInfo = {
  22122: getInfo22122,
  22123: getInfo22123,
  22124: getInfo22124,
  22128: getInfo22128,
  22129: getInfo22129,
};

const getRelated22122 = require('./public/dummy-data/get.related-products-22122.json');

const getRelated = {
  22122: getRelated22122
};

const getStyles22122 = require('./public/dummy-data/get.product-styles-22122.json');
const getStyles22123 = require('./public/dummy-data/get.product-styles-22123.json');
const getStyles22124 = require('./public/dummy-data/get.product-styles-22124.json');
const getStyles22128 = require('./public/dummy-data/get.product-styles-22128.json');
const getStyles22129 = require('./public/dummy-data/get.product-styles-22129.json');

const getStyles = {
  22122: getStyles22122,
  22123: getStyles22123,
  22124: getStyles22124,
  22128: getStyles22128,
  22129: getStyles22129,
}

const getReviews22122 = require('./public/dummy-data/get.product-styles-22122.json');
const getReviews22123 = require('./public/dummy-data/get.product-styles-22123.json');
const getReviews22124 = require('./public/dummy-data/get.product-styles-22124.json');
const getReviews22128 = require('./public/dummy-data/get.product-styles-22128.json');
const getReviews22129 = require('./public/dummy-data/get.product-styles-22129.json');

const getReviews = {
  22122: getReviews22122,
  22123: getReviews22123,
  22124: getReviews22124,
  22128: getReviews22128,
  22129: getReviews22129,
}


const atelierHeaders = {
  headers: {
    'Authorization': process.env.GITHUB_TOKEN
  }
};
const s3Headers = {
  headers: {
    'Authorization': process.env.S3_TOKEN
  }
};

const pathname = path.join(__dirname, 'public');
app.use(express.static(pathname));
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world from server!');
});

app.get('/products/:product_id/related', (req, res) => {
  // axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.params.product_id}/related`, atelierHeaders)
  new Promise((resolve, reject) => resolve(getRelated[req.params.product_id]))
    // .then(response => response.data)
    .then(relatedItems => {
      const promises = [];
      relatedItems.forEach((item) => {
        // promises.push(axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${item}`, atelierHeaders));
        promises.push(new Promise((resolve, reject) => resolve(getInfo[item])));
      });
      return Promise.all(promises);
    })
    .then(items => {
      const itemsData = [];
      items.forEach(item => {
        // itemsData.push(item.data);
        itemsData.push(item);
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

  // axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${req.params.product_id}&count=100`, atelierHeaders)
  new Promise((resolve, reject) => resolve(getReviews[req.params.product_id]))
    // .then(response => response.data)
    .then(reviews => (reviews.results.reduce((acc, review) => acc + review.rating, 0) / reviews.results.length))
    .then(averageRating => {
      // If no ratings exist, at least let it be a number
      rating = averageRating || 0;
    })
    // .then(_ => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.params.product_id}/styles`, atelierHeaders))
    .then(_ => new Promise((resolve, reject) => resolve(getStyles[req.params.product_id])))
    // .then(response => response.data)
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
