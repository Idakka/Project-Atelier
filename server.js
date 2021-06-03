const axios = require('axios');
const path = require('path');
const express = require('express');

const app = express();
const port = 1234;

const pathname = path.join(__dirname, 'public');
app.use(express.static(pathname));

app.get('/', (req, res) => {
  res.send('hello world from server!');
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
