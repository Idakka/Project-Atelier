const axios = require('axios');
const dotenv = require('dotenv').config({path: __dirname + '/..' + '/.env'});
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 1234;

const atelierQueries = require('./atelier-queries.js');

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

const pathname = path.join(__dirname, '..', 'public');
app.use(express.static(pathname));
app.use(cors());

app.get('/qa/questions/', (req, res) => {
  var currentProduct = 22126; // will need to be updated once product is rendering on page
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${currentProduct}`, atelierHeaders)
    .then(response => {
      res.send(response.data.results);
      res.end();
    })
    .catch(err => console.log('err', err));
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  // NOTE - this path will need to be refactored, answers aren't comming from it currently, keeping for reference
  // var currentProduct = 22126; // will need to be updated once product is rendering on page
  // axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${currentProduct}`)
  //   .then(response => {
  //     var questions = [];
  //     response.data.results.forEach((item) => {
  //       questions.push(item);
  //     });
  //     return questions;
  //   })
  //   .then(getAnswers => {
  //     var answers = [];
  //     getAnswers.forEach(item => {
  //       answers.push(item.answers);
  //     })
  //     res.send(answers);
  //     res.end();
  //   })
  //   .catch(err => console.log('err', err));
});

app.get('/products/:product_id/related', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.params.product_id}/related`, atelierHeaders)
    .then(response => response.data)
    .then(relatedItems => {
      const promises = [];
      relatedItems.forEach((item) => {
        promises.push(axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${item}`, atelierHeaders));
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

// qqq delete when better API route for current product is completed
app.get('/products/:product_id/card-info', (req, res) => {
  let rating = 0;
  let pictureURL = '';
  let originalPrice = 0;
  let salePrice = 0;

  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${req.params.product_id}&count=100`, atelierHeaders)
    .then(response => response.data)
    .then(reviews => (reviews.results.reduce((acc, review) => acc + review.rating, 0) / reviews.results.length))
    .then(averageRating => {
      // If no ratings exist, at least let it be a number
      rating = averageRating || 0;
    })
    .then(_ => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.params.product_id}/styles`, atelierHeaders))
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

app.get('/products/:product_id/current', (req, res) => {
  atelierQueries.getCurrentProduct(req.params.product_id, atelierHeaders)
    .then(result => res.end(JSON.stringify(result)))
    .catch(error => {
      console.error(error);
      res.end(JSON.stringify(error));
    });
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
