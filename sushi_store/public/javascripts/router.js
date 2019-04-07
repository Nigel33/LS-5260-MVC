let router = new (Backbone.Router.extend({
	routes: {
		'menu/:id': 'ItemView',
		'menu': "indexView",
		'menu/': "indexView",
		'checkout': 'checkoutView',
		'checkout/': 'checkoutView',
	},

	ItemView: function(id) {
		App.renderSushiDetails(id);
		App.repaint();
	},

	indexView: function() {
		this.navigate('menu');
		App.restart();
	},

	checkoutView: function() {
		App.repaintCheckout();
	},

	initialize: function() {
		this.route(/^\/?$/, 'index', this.indexView);
		// this.routes
	},
}))();

Backbone.history.start({
	pushState: true
});

$(document).on('click', 'a[href^="/"]', function (e) {
  e.preventDefault();

  router.navigate($(e.currentTarget).attr('href').replace(/^\//, ''), { trigger: true });
});

$(document).on('submit', 'form', function (e) {
  e.preventDefault();

  router.navigate($(e.currentTarget).attr('action').replace(/^\//, ''), { trigger: true });
});
