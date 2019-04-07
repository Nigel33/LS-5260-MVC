let SushiItemView = Backbone.View.extend({
	template: App.templates.sushiItem,
	location: App.$el.find("#content"),
	modelId: null,
	attributes: {
		'id': 'item_details',
	},
	events: {
		'click .close': 'remove',
		'click .prev': 'showPrevious',
		'click .next': 'showNext',
		'click .add_cart': 'addItem',
	},
	addItem: function(e) {
		e.preventDefault();

		App.trigger('addItem', this.model);
	},

	remove: function(e) {
		e.preventDefault();

		this.$el.remove();
		// App.$el.find('#items').fadeIn(200);
	},

	getPrevModel: function() {
		let id = +this.modelId - 1;


		if (id) {
			router.navigate('menu/' + id, {trigger: false});
			return App.sushis.get(+id);
		}

		router.navigate('menu/' + App.sushis.length, {trigger: false});
		return App.sushis.get(App.sushis.length);
	},

	getNextModel: function() {
		let id = +this.modelId + 1;

		if (id > App.sushis.length) {
			router.navigate('menu/' + 1, {trigger: false});
			return App.sushis.get(1);

		}

		router.navigate('menu/' + id, {trigger: false});
		return App.sushis.get(+id);
	},

	processChangingItem: function(model) {
		this.$el.remove();
		App.trigger('viewItemDetails', model);
	},

	showPrevious: function() {
		let model = this.getPrevModel();

		this.processChangingItem(model);
	},

	showNext: function() {
		let model = this.getNextModel();

		this.processChangingItem(model);
	},

	render: function() {
		this.modelId = this.model.get('id');
		this.$el.html(this.template(this.model.toJSON()));
		// App.$el.find('#items').fadeOut(200);
		// this.location.append(this.$el);
		this.location.html(this.$el);
	},

	initialize: function() {
		this.render();
	},
});
