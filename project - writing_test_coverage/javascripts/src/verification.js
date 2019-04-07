ArrayModels = {
	models: [
		"Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"
	],

	price: [16500, 14500, 21000, 15800, 12000, 13100, 16000, 18100, 22500, 19300],
}


class ModuleVerify {
	verifyOptions(options) {
		let key;
		let value;
		let string;

		for (key in options) {
			value = String(options[key]).replace(/[\s,]+/, '');
			string = (typeof value === 'string');

			if (value.length === 0 || !(string)) {
				return false;
			}
		}

		return true;
	};

	verify(model) {
		if (ArrayModels.models.includes(model)) {
			return true;
		}

		return false;
	}
};



let $v = new ModuleVerify();


