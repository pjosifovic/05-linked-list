'use strict';

const LinkedList = require('../lib/linked-list');

describe('linked-list.js',() => {
  test('A list with a single element, should have a value and no next', () => {
    let result = new LinkedList(5);
    console.log(result);
    expect(result.value).toEqual(5);
    expect(result.next).toEqual(null);
  });


});
