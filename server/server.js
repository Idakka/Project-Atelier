const axios = require('axios');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config({path: __dirname + '/..' + '/.env'});
const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

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
    'S3Bucket': process.env.S3_BUCKET,
    'AccessKeyID': process.env.S3_ACCESS_KEY_ID,
    'Authorization': process.env.S3_TOKEN
  }
};

const s3 = new AWS.S3({
  accessKeyId: s3Headers.headers.AccessKeyID,
  secretAccessKey: s3Headers.headers.Authorization
});

AWS.config.update({region: 'us-east-1'});

var uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    bucket: s3Headers.headers.S3Bucket,
    metadata: (req, file, getFieldname) => {
      getFieldname(null, {fieldName: file.fieldname});
    },
    key: (req, file, createAWSName) => {
      createAWSName(null, Date.now().toString() + '-' + file.originalname);
    }
  })
});

var photoUpload = uploadS3.array('review-photo', 5);


const pathname = path.join(__dirname, '..', 'public');
app.use(express.static(pathname));
const corsOptions = {
  origin: 'http://localhost:1234',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/qa/questions/', (req, res) => {
  var productId = 22126; // will need to be updated once product is rendering on page
  atelierQueries.getProductQuestions(productId, atelierHeaders)
    .then(result => {
      res.end(JSON.stringify(result));
    })
    .catch(error => {
      console.error(error);
      res.end(JSON.stringify(error));
    });
});

app.post('/qa/questions', (req, res) => {
  atelierQueries.postQuestion(req.body, atelierHeaders)
    .then(result => {
      const parseResult = JSON.parse(result);
      atelierQueries.getProductQuestions(parseResult.product_id, atelierHeaders)
        .then(questions => questions);
      return result;
    })
    .then(result => {
      res.end(JSON.stringify(result));
    })
    .catch(error => {
      console.error(error);
      res.end(JSON.stringify(error));
    });
});

app.get('/qa/questions/:question_id/answers', (req, res) => {

});

app.post('/qa/questions/:question_id/answers', (req, res) => {
  atelierQueries.postAnswer(req.body, atelierHeaders)
    .then(result => {
      res.end(JSON.stringify(result));
    })
    .catch(error => {
      console.error(error);
      res.end(JSON.stringify(error));
    });
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  var questionId = req.body;
  atelierQueries.helpfulQuestion(questionId, atelierHeaders)
    .then(result => {
      res.end(result);
    })
    .catch(error => {
      console.error(error);
    });
});

app.put('/qa/questions/:question_id/report', (req, res) => {
  var questionId = req.body;
  atelierQueries.reportQuestion(questionId, atelierHeaders)
    .then(result => {
      res.end(result);
    })
    .catch(error => {
      console.error(error);
    });
});

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  var answerId = req.body;
  atelierQueries.helpfulAnswer(answerId, atelierHeaders)
    .then(result => {
      res.end(result);
    })
    .catch(error => {
      console.error(error);
    });
});

app.put('/qa/answers/:answer_id/report', (req, res) => {
  var answerId = req.body;
  atelierQueries.reportAnswer(answerId, atelierHeaders)
    .then(result => {
      res.end(result);
    })
    .catch(error => {
      console.error(error);
    });
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
  // If there is nothing in the query param 'ids', send back empty array
  if (relatedProducts[0] === '') {
    res.end(JSON.stringify([]));
    return;
  }
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

app.post('/interactions', (req, res) => {
  atelierQueries.postInteraction(req.body, atelierHeaders)
    .then(result => res.end(JSON.stringify(result)))
    .catch(error => {
      console.error(error);
      res.end(JSON.stringify(error));
    });
});

app.post('/photo-upload', (req, res) => {
  // send urls to review POST route
  photoUpload(req, res, (err, data) => {
    if (err) {
      res.status(400).end('server error uploading photos');
    } else {
      res.status(200).redirect('/');
    }
  });
});

app.post('/cart', (req, res) => {
  atelierQueries.postCart(req.body, atelierHeaders)
    .then(result => res.end(JSON.stringify(result)))
    .catch(error => {
      console.error(error);
      res.end(JSON.stringify(error));
    });
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
