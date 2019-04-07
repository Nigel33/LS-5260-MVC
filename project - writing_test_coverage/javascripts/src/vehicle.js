
class Vehicle {
	constructor(options) {
		let verified = $v.verifyOptions(options);

		if (verified) {
			this.make = options.make;
			this.model = options.model;
			return this;
		}

		throw Error('invalid model or make')
	};

	toString() {
		return `${this.make} ${this.model}`;
	}

	honkHorn() {
		return 'Beep beep!';
	}
};





