
let ListItemView = Backbone.View.extend({
	template: Handlebars.templates.listItem,
	tagName: 'li',

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this.el;
	},
});
