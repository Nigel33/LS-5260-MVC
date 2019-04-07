let App = {
	$body: $('tbody'),
	template: Handlebars.compile($("#items").html()),
	Collection: null,

	bind: function() {
		this.$body.on('click', 'a', this.removeItem.bind(this));
	},

	removeItem: function(e) {
		e.preventDefault();

		let model = this.Collection.get($(e.target).attr('data-id'));
		console.log(model);
	},

	initialize: function() {
		this.Collection = new ItemsCollection(items_json);
		this.Collection.sortBy('name');
		this.Collection.render();
		this.bind();
	},
}

var ItemModel = Backbone.Model.extend({
	initialize: function() {
		this.collection.incrementId();
		this.set('id', this.collection.lastId);

		console.log(this);
	}
})

var ItemsCollection = Backbone.Collection.extend({
	lastId: 0,
	model: ItemModel,

	incrementId: function() {
		this.lastId++;
	},

	render: function() {
		App.$body.html(App.template({
      items: this.models
    }));
	},

	sortBy: function(criteria) {
		this.models = _(this.models).sortBy(function(model) {
			return model.get(criteria);
		});
	},

	sortByName: function() {this.sortBy('name')},

	initialize: function() {
		this.on('remove reset', this.render);
		this.on('add', this.sortByName);
		this.on('sort', this.render)
	},

})

$("form").on("submit", function(e) {
  e.preventDefault();
  var inputs = $(this).serializeArray(),
      attrs = {},
      item;

  inputs.forEach(function(input) {
    attrs[input.name] = input.value;
  });

  item = App.Items.add(attrs);
  this.reset();
});

$("th").on("click", function() {
  var prop = $(this).attr("data-prop");
  App.Items.sortBy(prop);
});

$("p a").on("click", function(e) {
  e.preventDefault();
  App.Items.reset();
});

Handlebars.registerPartial("item", $("#item").html());
App.initialize();

