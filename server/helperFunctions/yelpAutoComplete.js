const axios = require('axios');
const key = require('../../YelpAPIKeys.js');

const yelpAutoComplete = 'https://api.yelp.com/v3/autocomplete?'

module.exports = (req, res) => {
  const { input } = req.query;
  console.log(input)
  axios.get(yelpAutoComplete + `text=${input}`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  })
    .then(({ data }) => {
      res.status(200).json(data.predictions);
    })
    .catch((err) => {
      console.log(err)
      res.status(401).send(err)
    });
};
