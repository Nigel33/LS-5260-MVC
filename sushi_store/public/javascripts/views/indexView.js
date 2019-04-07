let IndexView = Backbone.View.extend({
	template: App.templates.index,
	$location: $('header'),
	render: function() {
		this.$location.html(this.template(this.collection));
	},

	initialize: function() {
		this.render();
	},
});
