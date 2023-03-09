const express = require('express');
const router = express.Router();
const yelpCtrl = require('../../controllers/api/yelp')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/search', yelpCtrl.searchBreweries)


module.exports = router;