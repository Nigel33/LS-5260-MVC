

class Honda extends Vehicle {
	constructor(model) {
		let verified = 	$v.verify(model);

		if (verified) {
			super({make: 'Honda', model: model});
			return this;
		}

		throw Error(`Model ${model} does not exist`);
	}

	static getPrice(model) {
		let index = ArrayModels.models.indexOf(model);

		return ArrayModels.price[index];
	}

	static getModels() {
		return ArrayModels.models;
	}
};

let car = new Honda('CR-Z');
Honda.getPrice('Crosstour');





