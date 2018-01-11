/**
 * JavaScript Objects!
 */

/* eslint-disable */
'use strict';

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

var fluffy = new Cat('Fluffy', 'White');
Cat.prototype.age = 3;
var muffin = new Cat('Muffin', 'Brown');

console.log(Cat.prototype);

console.log(fluffy.__proto__);
console.log(Cat.prototype === fluffy.__proto__); // true, Same Instance

console.log(muffin.__proto__);
console.log(Cat.prototype === muffin.__proto__); // true, Same Instance
