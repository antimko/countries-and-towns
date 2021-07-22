const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newCountrySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    continent: {
      type: String,
      required: true,
    },
    population: {
      type: Number,
      required: true,
    },
    typeOfPlace: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CountryModel = mongoose.model('country', newCountrySchema);

module.exports = CountryModel;
