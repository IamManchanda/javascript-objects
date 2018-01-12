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

Cat.prototype = {
  age: 5,
};

var snowbell = new Cat('Snowbell', 'White');

console.log(fluffy);
console.log(fluffy.age);

console.log(muffin);
console.log(muffin.age);

console.log(snowbell);
console.log(snowbell.age)

console.log(Cat.prototype.age);
