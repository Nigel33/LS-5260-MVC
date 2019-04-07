
let App = {
	templates: JST,
	$el: $('main'),
	sushis: null,
	sushiCart: null,
	cartView: null,
	checkoutView: null,
	renderAllSushi: function() {
		$('main').find('#content').html($('<ul id="items"></ul>'));
		this.sushis.each(function(sushi) {
			new SushiView({model: sushi});
		});
	},

	renderHeader: function() {
		new IndexView({collection: this.sushiCart});
	},

	renderCart: function() {
		this.cartView = new CartView({collection: this.sushiCart});
	},

	renderSushiDetails: function(id) {
		new SushiItemView({model: this.sushis.get(id)});
	},

	renderCheckout: function() {
		this.checkoutView = new CheckoutView({collection: this.sushiCart});
	},

	createSushiCart: function() {
		this.sushiCart = new SushiCart();
	},

	repaint: function() {
		this.renderHeader();
		this.cartView.render();
	},

	repaintCheckout: function() {
		this.renderHeader();
		new CheckoutView({collection: this.sushiCart});
	},

	restart: function() {
		this.renderAllSushi();
		this.repaint();
	},

	bindEvents: function() {
		this.on('viewItemDetails', this.renderSushiDetails.bind(this));
		this.on('addItem', this.sushiCart.addItemToCart.bind(this.sushiCart));
		this.on('checkoutAdd', this.sushiCart.checkoutAddItem.bind(this.sushiCart));
		this.on('checkoutReduce', this.sushiCart.checkoutReduceItem.bind(this.sushiCart));
		this.on('cartUpdated', this.repaint);
		this.on('checkout', this.renderCheckout);
		this.on('updateCheckout', this.repaintCheckout);
		this.on('cancelOrder', this.restart);
		this.on('submitOrder', this.restart);
	},

	init: function() {
		_.extend(this, Backbone.Events);
		this.createSushiCart();
		this.renderHeader();
		this.renderCart();
		this.renderAllSushi();
		this.bindEvents();
	},
};





