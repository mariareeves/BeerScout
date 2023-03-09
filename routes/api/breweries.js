const express = require('express');
const router = express.Router();
const search = require('../../src/utilities/yelp-api')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', search.searchBusinesses)


module.exports = router;