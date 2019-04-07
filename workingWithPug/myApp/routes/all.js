var express = require('express');
var router = express.Router();
var fs = require('fs'); //file system
var path = require("path");


router.get('/', function(req, res, next) {
  let title = 'Web Store';
  let products = fs.readFileSync(path.resolve(path.dirname(__dirname),
  	'public/products.json'), 'utf8');

  res.render('index', {
  	title: 'Web Store',
  	products: JSON.parse(products),
  });
});

module.exports = router;



