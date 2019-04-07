var fs = require('fs');
var path = require('path');
var file_path = path.resolve(path.dirname(__dirname), 'data/sushis.json');
var _ = require('underscore');

module.exports = {
	getAll: function() {
		return JSON.parse(fs.readFileSync(file_path, 'utf8'));
	},

	getOne: function(id) {
		return _(this.getAll()).findWhere({id: id});
	},
};
