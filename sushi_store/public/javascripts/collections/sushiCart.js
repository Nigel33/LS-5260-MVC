let SushiCart = Backbone.Collection.extend({
	totalQuantity: 0,
	totalPrice: 0,
	addItemToCart: function(item) {
		this.addModel(item);
		this.setTotalQuantity().setTotalPrice().updateStorage();
		App.trigger('cartUpdated');
	},

	checkoutAddItem: function(item) {
		this.addModel(item);
		this.setTotalQuantity().setTotalPrice().updateStorage();
		App.trigger('updateCheckout');
	},

	checkoutReduceItem: function(item) {
		this.reduceModel(item);
		this.setTotalQuantity().setTotalPrice().updateStorage();
		App.trigger('updateCheckout');
	},

	addModel: function(model) {
		let existing = this.get(model.get('id'));

		if (existing) {
			let newQuantity = +existing.get('quantity') + 1;

			existing.set({'quantity': newQuantity});
		} else {
			model = model.clone();
			model.set({quantity: 1});
			this.add(model);
		}
	},

	reduceModel: function(model) {
		let newQuantity = model.get('quantity') - 1;

		if (!newQuantity) {
			return this.remove(model);
		}

		model.set({quantity: newQuantity});
	},

	setTotalQuantity: function() {
		this.totalQuantity = this.toJSON().reduce(function(acc, curr) {
			return acc + curr.quantity;
		}, 0);

		return this;
	},

	setTotalPrice: function() {
		this.totalPrice = this.toJSON().reduce(function(acc, curr) {
			return acc + (curr.quantity * curr.price);
		}, 0);

		return this;
	},

	resetAll: function() {
		this.reset();
		this.totalPrice = 0;
		this.totalQuantity = 0;
		this.updateStorage();
	},

	readStorage: function() {
		let storedCart = JSON.parse(localStorage.getItem('cart'));

		this.reset(storedCart);
		this.setTotalQuantity().setTotalPrice();
	},

	updateStorage: function() {
		localStorage.setItem('cart', JSON.stringify(this.toJSON()))
	},

	initialize: function() {
		this.readStorage();
	}
});
