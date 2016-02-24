var miles = require('../lib/miles.js')

describe("miles", function () {
  it ('determines if a car has enough gas to travel route', function (){
    var car = {
      mpg: 20,
      gallonsInTank: 3
    };

    var route = {
      miles: 200,
      destination: 'the dark side',
      location: 'moon'
    };

    expect(miles.hasEnoughGas(car, route)).toEqual(false)
    car.gallonsInTank += 20
    expect(miles.hasEnoughGas(car, route)).toEqual(true)
  });
});
