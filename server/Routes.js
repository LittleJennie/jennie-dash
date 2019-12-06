const express = require('express');
const googleMapPlaceSearch = require('./helperFunctions/googleMapPlaceSearch.js');
const yelpBusinessSearch = require('./helperFunctions/yelpBusinessSearch.js');


const route = express.Router();

route.get('/googleMapPlaceSearch', googleMapPlaceSearch);
route.get('/yelpBusinessSearch', yelpBusinessSearch);

module.exports = route;
