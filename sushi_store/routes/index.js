
var path = require('path');
var Sushi = require(path.resolve(path.dirname(__dirname), 'modules/sushi'));

/* GET home page. */

module.exports = function(router) {
	router.get('/', function(req, res, next) {
	  res.render('index', {
	    sushis: Sushi.getAll(),
	  });
	});
	router.get('/menu', function(req, res, next) {
		res.render('index', {
	    sushis: Sushi.getAll(),
	  });
	});
};
