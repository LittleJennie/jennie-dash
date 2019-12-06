const axios = require('axios');
const key = require('../../YelpAPIKeys.js');

const yelpAutoComplete = 'https://api.yelp.com/v3/businesses/search'

module.exports = (req, res) => {
  const { input } = req.query;
  console.log(input)
  axios.get(yelpAutoComplete, {
    headers: {
      Authorization: key,
    },
    params: {
      term: input,
      // need to make lat long dynamic
      latitude: 37.787647,
      longitude: -122.396788,
    },
  })
    .then(({ data }) => {
      console.log(data)
      res.status(200).json(data.businesses);
    })
    .catch((err) => {
      console.log(err)
      res.status(401).send(err)
    });
};
