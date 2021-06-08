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

app.get('/qa/questions/', (req, res) => {
  var currentProduct = 22126; // will need to be updated once product is rendering on page
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${currentProduct}`)
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


app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
