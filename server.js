const axios = require('axios');
const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 1234;

// console.log(process.env.GITHUB_TOKEN);

const pathname = path.join(__dirname, 'public');
app.use(express.static(pathname));
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world from server!');
});

app.post('/upload', (req, res) => {
  res.send('temp placeholder for image upload');
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
