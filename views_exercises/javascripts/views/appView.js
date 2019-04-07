
var AppView = Backbone.View.extend({
  el: 'body',
  newPersonTemplate: Handlebars.templates.newPerson,
  events: {
    'click button': 'renderNewPersonModal',
    'submit': 'addNewPerson',
    'click .btn-cancel': 'removeForm',
  },

  addNewPerson: function(e) {
  	e.preventDefault();

  	let $form = this.$('form');

  	let personData = {
  		name: $form.find('#name').val(),
  		colors: [$form.find('#color1').val(), $form.find('#color2').val(), $form.find('#color3').val()],
  	};

  	App.ListCollection.add(personData);
  	this.$('form').remove();
  },

  removeForm: function(e) {
  	e.preventDefault();

  	this.$('form').remove();
  },

  renderNewPersonModal: function() {
    this.$el.append(this.newPersonTemplate());
  },
});
