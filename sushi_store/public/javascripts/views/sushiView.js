let SushiView = Backbone.View.extend({
	tagName: 'li',
	template: App.templates.sushi,
	events: {
		'click article header': "renderItemView",
		'click .add_cart': 'addItem'
	},
	renderItemView: function(e) {
		e.preventDefault();
		let id = $(e.target).parents('li').attr('data-id');

		router.navigate('menu/' + id, {trigger: false});
		App.trigger('viewItemDetails', +id);
	},

	render: function() {
		this.$el.attr('data-id', this.model.get('id'));
		this.$el.html(this.template(this.model.toJSON()));
		App.$el.find('#items').append(this.el);
	},

	addItem: function(e) {
		e.preventDefault();

		App.trigger('addItem', this.model);
	},

	initialize: function() {
		this.render();
	}
});
