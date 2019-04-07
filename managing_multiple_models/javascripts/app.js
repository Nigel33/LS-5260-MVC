let ProductModel = Backbone.Model.extend();

let TemplatingEngine = {
	itemsTemplate: null,
	item: null,

	registerTemplates: function() {
		this.itemsTemplate = Handlebars.compile($('#items').html());
		this.item = Handlebars.compile($('#item').html());

		Handlebars.registerPartial('item', $('#item').html());
	},
};

let App = {
	collection: [],
	counter: 1,
	initialize: function() {
		this.seedCollection(items_json);
		this.sortCollectionByName();
		this.bindEvents();
	},

	bindEvents: function() {
		$('tbody').on('click', "a:contains('Delete')", this.deleteItem.bind(this));
		$('form').on('submit', this.addItem.bind(this));
		$('a:contains("Delete all")').on('click', this.deleteAllItems.bind(this));
		$('th[data-prop="name"]').on('click', this.processSortingName.bind(this));
		$('th[data-prop="quantity"]').on('click', this.processSortingQuantity.bind(this));
	},

	deleteAllItems: function(e) {
		this.collection = [];
		this.renderProducts();
	},

	addItem: function(e) {
		e.preventDefault();
		let inputs = $(e.currentTarget).serializeArray();
		let item = this.parseInputs(inputs);

		this.collection.push(new ProductModel(item));
		this.renderProducts(this.collection);

		e.currentTarget.reset();
	},

	parseInputs: function(array) {
		let result = {};

		array.forEach(function (item) {
			let key = item.name;
			let value = item.value;

			result[key] = value;
		});

		return result;
	},

	deleteItem: function(e) {
		let id = $(e.target).attr('data-id');

		this.collection = this.collection.filter(function(model) {
			return String(model.get('id')) !== String(id);
		});

		this.renderProducts();
	},

	seedCollection: function(items) {
		items.forEach(function(item) {
			let model = new ProductModel(item);

			model.set('id', this.counter);
			this.collection.push(model);
			this.counter++;
		}, this);
	},

	processSortingName: function(e) {
		this.sortCollectionByName();
		this.renderProducts();
	},

	processSortingQuantity: function(e) {
		this.sortCollectionByQuantity();
		this.renderProducts();
	},

	sortCollectionByName: function() {
		this.collection = _(this.collection).sortBy(function(model) {
			return model.get('name');
		})
	},

	sortCollectionByQuantity: function() {
		this.collection = _(this.collection).sortBy(function(model) {
			return model.get('quantity');
		})
	},

	renderProducts: function() {
		$('tbody').html(TemplatingEngine.itemsTemplate({items: this.collection}));
	},
};

TemplatingEngine.registerTemplates();
App.initialize();
App.renderProducts();




