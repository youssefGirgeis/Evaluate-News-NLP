const dotenv = require('dotenv');
const path = require('path');
const fetch = require('node-fetch');
var bodyParser = require('body-parser');
dotenv.config();
const express = require('express');

const API_KEY = process.env.API_KEY;
const app = express();

app.use(express.static('dist'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
  //res.sendFile(path.resolve('src/client/views/index.html'));
});

const API_ENDPOINT = 'https://api.meaningcloud.com/sentiment-2.1';

app.post('/api', async (req, res) => {
  console.log('URL = ', req.body.url);
  try {
    const response = await fetch(
      `${API_ENDPOINT}?key=${API_KEY}&lang=en&url=${req.body.url}`
    );
    const data = await response.json();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
