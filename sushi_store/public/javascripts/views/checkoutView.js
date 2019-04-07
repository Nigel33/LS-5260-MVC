let CheckoutView = Backbone.View.extend({
	template: App.templates.checkout,
	$location: App.$el.find('#content'),
	$cart: App.$el.find('#cart'),
	attributes: {
		id: 'checkout',
	},
	events: {
		'click .cancel': 'cancelOrder',
		'submit': 'submitOrder',
		'click .fa-plus': 'addItem',
		'click .fa-minus': 'reduceItem',
	},

	addItem: function(e) {
		e.preventDefault();
		let model = this.getModel.call(this, e.target);

		App.trigger('checkoutAdd', model);
	},

	reduceItem: function(e) {
		e.preventDefault();
		let model = this.getModel.call(this, e.target);

		App.trigger('checkoutReduce', model);
	},

	getModel: function(element) {
		let id = +$(element).parents('tr').attr('data-id');

		return this.collection.get(id);
	},

	cancelOrder: function(e) {
		e.preventDefault();

		this.process();
		App.trigger('cancelOrder');
	},

	submitOrder: function(e) {
		e.preventDefault();

		this.process();
		App.trigger('submitOrder');
	},

	process: function() {
		this.collection.resetAll();
		this.$el.remove();
	},

	render: function() {
		this.$cart.slideUp(function() {
			$(this).empty();
		});
		this.$el.html(this.template(this.collection));
		this.$location.html(this.$el);
	},

	initialize: function() {
		this.render();
	}
});
