let NewAlbumView = Backbone.View.extend({
	template: App.templates.new_album,
	attributes: {
		id: 'album_new',
	},
	events: {
		submit: 'create'
	},
	render: function() {
		this.$el.html(this.template());
		App.$el.html(this.$el);
	},

	create: function(e) {
		e.preventDefault();
		let $f = this.$('form');

		$.ajax({
			url: $f.attr('action'),
			type: $f.attr('method'),
			data: $f.serialize(),
			success: function(json) {
				App.albums.add(json);
				App.init();
			}
		})
	},

	initialize: function() {
		this.render();
	},
});
