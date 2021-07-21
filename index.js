// start of back end
require('dotenv').config();
// const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 4000;
console.log(process.env.MONGO_CONNECT_STIRNG);
//prisijungimas prie duomenu bazes
mongoose
  .connect(process.env.MONGO_CONNECT_STIRNG, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('Conneced to my Mongoose!');
  })
  .catch((err) => console.error(err.message));

app.get('/', function (req, res) {
  res.status(200).json(`Serveris veikia an port ${PORT}`);
});

app.listen(PORT, console.log(`Back end online on port ${PORT}`));
