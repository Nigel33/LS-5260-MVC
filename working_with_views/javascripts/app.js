


Handlebars.registerPartial("post", $("#post").html());

let Post = Backbone.Model.extend({
	urlRoot: 'http://jsonplaceholder.typicode.com/posts',
	initialize: function() {

	}
});

let Posts = Backbone.Collection.extend({
	comparator: 'title',
	url: 'http://jsonplaceholder.typicode.com/posts',
	model: Post,
})

let PostsView = Backbone.View.extend({
	el: $('main').get(0),
	template: Handlebars.compile($("#posts_template").html()),
	events: {
		'click h1': 'logMe'
	},

	logMe: function() {
		console.log('adsddsd');
	},
	render: function() {
		console.log('render');
		console.log(this.collection.toJSON());
		this.$el.html(this.template({posts: this.collection.toJSON()}));
	},

	initialize: function(options) {
		this.listenToOnce(this.collection, 'sync', this.render);
	},
})

let PostView = Backbone.View.extend({
	tagName: 'article',
	template: Handlebars.compile($('#post').html()),
	render: function() {
		this.$el.html(this.template(this.model.toJSON()))
		$('main').prepend(this.$el);
	},

	initialize: function() {
		this.listenTo(this.model, 'sync', this.render);
	}
})

let Blog_Posts = new Posts();
let Posts_Page = new PostsView({
	collection: Blog_Posts,
});


Blog_Posts.fetch();

$('form').on('submit', function(e) {
	e.preventDefault();

	let $form = $(this);
	let model;
	let post_view;

	let data = {
		title: $form.find("[name='title']").val(),
		body: $form.find("[name='body']").val(),
	};

	model = Blog_Posts.create(data);
	post_view = new PostView({model: model});
})


