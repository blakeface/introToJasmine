var rides = require('../lib/rides');

describe("rides", function (){
  it("testing test suite", function(){
    var child = '';
    var ride = '';

    expect(rides.isTallEnough(child, ride)).toEqual('hi')
  })
})
