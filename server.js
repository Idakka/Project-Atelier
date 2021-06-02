const dotenv = require('dotenv').config();
const axios = require('axios');
const path = require('path');
const express = require('express');

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
    .then(response => res.end(JSON.stringify(response.data)))
    .catch(err => res.end(JSON.stringify(err)));
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
