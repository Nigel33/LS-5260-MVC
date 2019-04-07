let TemplateEngine = {
	productTemplate: Handlebars.compile($('#product').html()),
	formTemplate: Handlebars.compile($('#form').html()),
}

let ProductModel = Backbone.Model.extend({
	initialize: function() {
		this.render()
		this.attachListeners();
	},

	formatproductDates: function() {
		this.set('date', new Date());
		this.set('date_time', this.get('date').toDateString());
		this.set('date_formatted', this.get('date').toTimeString());
	},

	render: function() {
		this.renderproduct();
		this.renderForm();
	},

	renderproduct: function() {
		$('article').html(TemplateEngine.productTemplate(this.attributes));
	},

	renderForm: function() {
		$('form').html(TemplateEngine.formTemplate(this.attributes));
		console.log('fdf');
	},

	attachListeners: function() {
		$('form').on('submit', this.submitForm.bind(this));
		console.log(this);
		this.on('change:name change:description', this.render.bind(this));
	},

	getFormInputs: function(form) {
		let inputs = $(form).serializeArray();
		let result = {};

		inputs.forEach(function(input) {
			let key = input.name;
			let value = input.value;

			result[key] = value;
		});

		result['date'] = new Date().valueOf();

		return result;
	},

	submitForm: function(e) {
		e.preventDefault();

		let formInputs = this.getFormInputs(e.target);
		this.set(formInputs);
		this.formatproductDates();
	},
})



let product = new ProductModel(product_json);

