
var path = require('path');
var Sushi = require(path.resolve(path.dirname(__dirname), 'modules/sushi'));

module.exports = function(router) {
	router.get('/menu/:id', function(req, res, next) {
	  var id = req.params.id;

	  res.render('item', {
	  	sushis: Sushi.getAll(),
	  });
	});
};
