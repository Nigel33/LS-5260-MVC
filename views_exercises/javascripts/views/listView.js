
let ListView = Backbone.View.extend({
	el: $('#favorites').get(0),
	render: function() {
		this.collection.each(this.renderOne.bind(this));
	},

	renderOne: function(model) {
		let listItemView = new ListItemView({model: model});
		this.$el.append(listItemView.render());
	},

	initialize: function() {
		this.listenTo(this.collection, 'add', this.renderOne);
	}
});
