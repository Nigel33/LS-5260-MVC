var path = require('path');
var Sushi = require(path.resolve(path.dirname(__dirname), 'modules/sushi'));

module.exports = function(router) {
	router.get('/checkout', function(req, res, next) {
	  res.render('checkout', {
	  	sushis: Sushi.getAll(),
	  });
	});
};
