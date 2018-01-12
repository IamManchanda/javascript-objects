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
var muffin = new Cat('Muffin', 'Brown');

fluffy.age = 5;

console.log(fluffy);
console.log(muffin);

console.log(fluffy.age);
console.log(muffin.age);

console.log(Object.keys(fluffy));
console.log(Object.keys(muffin));

console.log(fluffy.hasOwnProperty('age'));
console.log(muffin.hasOwnProperty('age'));
