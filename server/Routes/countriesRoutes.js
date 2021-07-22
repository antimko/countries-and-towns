const express = require('express');
const router = express.Router();
const CountryModel = require('../models/newCountry');

// router.post('/country/new', async (req, res) => {
//   res.json('The channel is open!');
// });

router.get('/country/new', (req, res) => {
  // sukuriam nauja posta pagal schemoje aprasyta modeli
  const newCountryModel = new CountryModel({
    name: 'New York',
    continent: 'North America',
    population: 300000000,
    country: 'USA',
  });
  // issaugoti duomenu bazeje naudojam .save()
  newCountryModel
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.error(err.message));
});

module.exports = router;
