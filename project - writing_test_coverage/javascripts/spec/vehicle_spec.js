describe('Vehicle functionality', function() {
  let obj;

  beforeEach(() => {
    obj = new Vehicle({make: 'Honda', model: 'Accord'});
  });

  it('initializing Vehicle object', () => {
    const car = {make: 'Honda', model: 'Accord'};
    expect(new Vehicle(car)).toEqual(obj);
  });

  it('initializing an invalid Vehicle object', () => {
    const car = {make: '    ', model: 'Accord'};
    expect(function() {new Vehicle(car)}).toThrow(new Error('invalid model or make'));
  });

  it('initializing an invalid Vehicle object v2', () => {
    const car = {make: '    ', model: ''};
    expect(function() {new Vehicle(car)}).toThrow(new Error('invalid model or make'));
  });

  it('initializing an invalid Vehicle object v2', () => {
    const car = {make: 12, model: ''};
    expect(function() {new Vehicle(car)}).toThrow(new Error('invalid model or make'));
  });

  it('testing toString() method', () => {
    expect(obj.toString()).toEqual('Honda Accord');
  });

  it('testing honkHorn() method', () => {
    expect(obj.honkHorn()).toEqual('Beep beep!');
  });
});
