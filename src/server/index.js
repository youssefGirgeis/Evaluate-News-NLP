const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

const API_KEY = process.env.API_KEY;
console.log(API_KEY);

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
