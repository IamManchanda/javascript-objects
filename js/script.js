/**
 * JavaScript Objects!
 */

/* eslint-disable */
'use strict';

var myFunction = function () {}
console.log(myFunction.prototype);
console.log(myFunction.prototype.__proto__);

var cat = {
  name: 'Fluffy',
};

console.log(cat.__proto__);