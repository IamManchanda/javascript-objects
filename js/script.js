/**
 * JavaScript Objects!
 */

/* eslint-disable */
'use strict';

Object.defineProperty(Array.prototype, 'first', {
  get: function () {
    return this[0];
  }
});

Object.defineProperty(Array.prototype, 'second', {
  get: function () {
    return this[1];
  }
});

Object.defineProperty(Array.prototype, 'last', {
  get: function () {
    return this[this.length - 1];
  }
});

// var colors = new Array('red', 'blue', 'green');
// or, Syntactic sugar below:
var colors = ['red', 'blue', 'green'];
console.log(colors.first, colors.second, colors.last);

// var numbers = new Array('one', 'two', 'three');
// or, Syntactic sugar below:
var numbers = ['one', 'two', 'three']
console.log(numbers.first, numbers.second, numbers.last);

