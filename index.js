// start of back end
require('dotenv').config();
const express = require('express');
// const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const PORT = 4000;

// prisijungimas prie duomenu bazes
// mongoose
//   .connect(process.env.MONGO_CONNECT_STIRNG, {
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((result) => {
//     console.log('Conneced to my Mongoose!');
//   })
//   .catch((err) => console.error(err.message));

// const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);
