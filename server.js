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

// // NOTE - GS setting this up to render products, will change once Sam gets a product
// app.get('/productTEMP', (req, res) => {
//   var currentProduct = 22126; // will need to be updated once product is rendering on page
//   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${currentProduct}`)
//     .then(response => {
//       console.log('questions: ', response.data);
//       res.send(response.data);
//     })
//     .catch(err => console.log('err', err));
// });

app.get('/qa/questions/', (req, res) => {
  var currentProduct = 22126; // will need to be updated once product is rendering on page
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${currentProduct}`)
    .then(response => {
      // current product id
      // console.log('answers from server (product_id): ', response.data.product_id);
      // console.log('response for questions', response.data.results);
      // console.log('response for questions', response.data.results[0].answers);
      res.send(response.data.results);
    })
    .catch(err => console.log('err', err));
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  var currentProduct = 22126; // will need to be updated once product is rendering on page
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${currentProduct}`)
    .then(response => {
      var currentQuestion = response.data.results;
      // console.log('check', currentQuestion);
      var currentAnswers = [];
      currentQuestion.forEach((item, index) => {
        // currentAnswers.push(item.answers[0]);
        currentAnswers.push(Object.keys(item.answers));
      })
      // console.log('answers...' , currentAnswers)
      res.send(JSON.stringify(currentAnswers));
    })
    .catch(err => console.log('err', err));
});


app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
