let CartView = Backbone.View.extend({
	template: App.templates.cart,
	el: App.$el.find('#cart').get(0),
	events: {
		'click .empty_cart': 'emptyCart',
		'click .checkout': 'checkout',
	},
	emptyCart: function(e) {
		e.preventDefault();

		this.collection.resetAll();
		App.trigger('cartUpdated');
	},

	checkout: function(e) {
		e.preventDefault();

		App.trigger('checkout');
	},

	render: function() {
		this.$el.html(this.template(this.collection));

		if (this.collection.totalQuantity) {
			this.$el.slideDown();
		} else {
			this.$el.slideUp();
		}
	},

	initialize: function() {
		this.render();
	},
});
