describe('Honda functionality', function() {
  let obj;
  const model = "CR-Z";

  beforeEach(() => {
    obj = new Honda('CR-Z');
  });

  it('initializing Honda object', () => {
    expect(new Honda(model)).toEqual(obj);
  });

  it('verifying make of object', () => {
    expect(obj.make).toEqual('Honda');
  });

  it('verifying model of object', () => {
    expect(obj.model).toEqual('CR-Z');
  });

  it('initializing Honda object', () => {
    expect(new Honda(model)).toEqual(obj);
  });

  it('initializing an invalid Vehicle object', () => {
    expect(function() {new Honda('alpha')}).toThrow(new Error(`Model alpha does not exist`));
  });

  it('initializing an invalid Vehicle object', () => {
    expect(function() {new Honda('')}).toThrow(new Error(`Model  does not exist`));
  });

  it('test verify() function with correct value', () => {
    expect($v.verify('Civic')).toEqual(true);
  });

  it('test verify() function with incorrect value', () => {
    expect($v.verify('  ')).toEqual(false);
  });

  it('test getPrice function', () => {
    expect(Honda.getPrice('Accord')).toEqual(16500);
  });

  it('test getModels function', () => {
    expect(Honda.getModels()).toEqual([
      "Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"
    ]);
  });

  it('testing inheritance from Vehicle from Honda instance', () => {
    expect(obj.toString()).toEqual('Honda CR-Z');
  });
});
