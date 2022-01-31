const dotenv = require('dotenv');
const path = require('path');
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

app.post('/api', (req, res) => {
  console.log('URL = ', req.body.url);
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
