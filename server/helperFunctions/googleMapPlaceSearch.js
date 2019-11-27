const axios = require('axios');
const key = require('../../GoogleAPIKeys.js');

const GooglePlaceAutoComplete = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?'

module.exports = (req, res) => {
  const { input } = req.query;
  console.log(input)
  axios.get(GooglePlaceAutoComplete + `input=${input}&key=${key}`)
    .then(({ data }) => {
      res.status(200).json(data.predictions);
    })
    .catch((err) => {
      res.status(401).error(err)
    });
};
