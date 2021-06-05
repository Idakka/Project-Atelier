const axios = require('axios');
const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const port = 1234;

axios.defaults.headers.common['Authorization'] = process.env.GITHUB_TOKEN;
// console.log(process.env.GITHUB_TOKEN);

const pathname = path.join(__dirname, 'public');
app.use(express.static(pathname));

app.get('/', (req, res) => {
  res.send('hello world from server!');
});

app.get('/qa/questions', (req, res) => {
  var currentProduct = 22126; // will need to be updated once product is rendering on page
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${currentProduct}`)
    .then(response => {
      // console.log('questions: ', response.data);
      res.send(response.data);
    })
    .catch(err => console.log('err', err));
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  var currentProduct = 22126; // will need to be updated once product is rendering on page
  var currentQuestion = 153694; // will need to be updated once product is rendering on page
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${currentProduct}&question_id=${currentQuestion}`)
    .then(response => {
      // current product id
      // console.log('answers from server (product_id): ', response.data.product_id);
      // qestion results for current product id
      // console.log('answers from server (questions results): ', response.data.results);
      // console.log('answers from server (answers?): ', response.data.results[0]); // requires an index variable to pulls answers for specific question
      var indexWithAnswers = 0;
      for (var i = 0; i < response.data.results.length; i++) {
        var indexId = response.data.results[i].question_id;
        if (currentQuestion !== indexId) {
          // indexWithAnswers = i;
          response.data.results.splice(1);
        }
        console.log('final', response.data.results);
      }
      console.log('answers?', response.data.results[indexWithAnswers].answers);
      res.send(response.data.results[indexWithAnswers].answers);
    })
    .catch(err => console.log('err', err));
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
