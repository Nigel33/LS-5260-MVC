var express = require('express');
var router = express.Router();
var _ = require("underscore");

module.exports = function(app) {
	function setActiveNavTo(title) {
		let active_item = _(app.locals.links).findWhere({active: true});

		if (active_item) {active_item.active = false;}
		_(app.locals.li nks).findWhere({title: title}).active = true;
	}

	/* GET home page. */
	router.get('/', function(req, res, next) {
	  let title = 'Home';

	  setActiveNavTo(title);

	  res.render('index', {
	  	title: 'Home',
	  });
	});

	return router;
};
