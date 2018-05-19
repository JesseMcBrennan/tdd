const chai = require('chai');
const assert = chai.assert;
const bubbleSort = require('../lib/bubbleSort.js');

describe('bubbleSort', function() {
  it('should have a variable containing numbers', function() {
    let array = [8,7,6,5,4,3,2,1]
  })
  it('should have a bubbleSort function', function() {
    assert.isFunction(bubbleSort())
  })
  it('should sort the numbers in the array in order of lowest to highest', function() {
    assert.equal(array, [1,2,3,4,5,6,7,8])
  })
})