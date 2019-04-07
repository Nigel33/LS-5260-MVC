let people = [
	{name: 'John', colors: ['red', 'blue', 'green']},
	{name: 'Victor', colors: ['red', 'blue', 'green']},
	{name: 'Ezekiel', colors: ['red', 'blue', 'green']},
];

let App = {
	ListCollection: null,
	ListView: null,
	AppView: null,

	initialize: function() {
		this.ListCollection = new List(people);
		this.ListView = new ListView({collection: this.ListCollection});
		this.ListView.render();
		this.AppView = new AppView({collection: this.ListCollection});
	}
}

App.initialize();

