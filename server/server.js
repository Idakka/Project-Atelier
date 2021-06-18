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

// Top level state queries
// .../products/current?id=12345
app.get('/products/current', (req, res) => {
  atelierQueries.getCurrentProductBundle(req.query.id, atelierHeaders)
    .then(result => res.end(JSON.stringify(result)))
    .catch(error => {
      console.error(error);
      res.end(JSON.stringify(error));
    });
});

// .../products/related?ids=12345,23456,34567
app.get('/products/related', (req, res) => {
  const relatedProducts = req.query.ids.split(',');
  atelierQueries.getRelatedProductsBundle(relatedProducts, atelierHeaders)
    .then(result => res.end(JSON.stringify(result)))
    .catch(error => {
      console.error(error);
      res.end(JSON.stringify(error));
    });
});

// Specific and smaller queries
// .../reviews?id=12345
app.get('/reviews', (req, res) => {
  const productId = req.query.id;
  atelierQueries.getProductReviews(productId, atelierHeaders)
    .then(result => res.end(JSON.stringify(result)))
    .catch(error => {
      console.error(error);
      res.end(JSON.stringify(error));
    });
});

// .../reviews/meta?id=12345
app.get('/reviews/meta', (req, res) => {
  const productId = req.query.id;
  atelierQueries.getProductReviewsMeta(productId, atelierHeaders)
    .then(result => res.end(JSON.stringify(result)))
    .catch(error => {
      console.error(error);
      res.end(JSON.stringify(error));
    });
});

// .../questions?id=12345
app.get('/questions', (req, res) => {
  const productId = req.query.id;
  atelierQueries.getProductQuestions(productId, atelierHeaders)
    .then(result => res.end(JSON.stringify(result)))
    .catch(error => {
      console.error(error);
      res.end(JSON.stringify(error));
    });
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
