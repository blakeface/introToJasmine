first run with jasmine

all tests live in spec directory

naming conventions:
  spec/projectName_spec.js
  lib/projectName.js
  -projectName must be consistent

for this example, we're using 'miles'

projectName.js file must export as an object
  i.e module.export = {}

testing syntax:
describe("miles", function () {
  it ('is our master plan here', function (){
    expect(miles.somefunction()).toEqual("funning stuff foreal")

describe = test suite
it = individual test

. = passing
