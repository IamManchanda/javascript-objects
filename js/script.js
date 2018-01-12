/**
 * JavaScript Objects!
 */

/* eslint-disable */
'use strict';

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.age = 4;

var fluffy = new Cat('Fluffy', 'White');

console.log(fluffy);
console.log(fluffy.__proto__);
console.log(fluffy.__proto__.__proto__);
console.log(fluffy.__proto__.__proto__.__proto__);
