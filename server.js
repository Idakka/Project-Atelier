const path = require('path');
const express = require('express');

const app = express();

const pathname = path.join(__dirname, 'client', 'dist');
app.use(express.static(pathname));
console.log(pathname);

app.listen(1234, () => console.log('Listening at http://localhost:1234 ...'));

// griselda testing