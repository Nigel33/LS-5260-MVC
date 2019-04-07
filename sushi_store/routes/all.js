var express = require('express');
var router = express.Router();
var path = require('path');
route_files = ['index', 'item', 'checkout'];

for (var i = 0; i < route_files.length; i++) {
	require(path.resolve(path.dirname(__dirname), "routes/" + route_files[i]))(router);
}

module.exports = router;
