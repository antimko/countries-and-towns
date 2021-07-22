// start of back end
require('dotenv').config();

// const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const { response } = require('express');
const app = express();
const CountryModel = require('./server/models/newCountry');
const PORT = 4000;
// console.log(process.env.MONGO_CONNECT_STIRNG);

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

// MIddleware
app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
  res.status(200).json(`Server is connected to the port N ${PORT}`);
});

// routes
// const countriesRoutes = require('./server/Routes/countriesRoutes');
// app.use('/', countriesRoutes);

// naujos vietos sukurimas:
app.post('/newPlace', async (req, res) => {
  // res.json('Kuriam nauja vieta');

  try {
    const newPlace = new CountryModel(req.body);
    await newPlace.save();
    res.json('Sukurta, aciu!');
  } catch (error) {
    res.json(error);
  }
});

// app.get('/', function (req, res) {
//   res.send('Viskas veikia!');
// });

app.listen(PORT, console.log(`Back end online on port ${PORT}`));
