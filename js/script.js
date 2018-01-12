/**
 * JavaScript Objects!
 */

/* eslint-disable */
'use strict';

function Animal(voice) {
  this.voice = voice || 'grunt';
}

Animal.prototype.speak = function () {
  console.log(this.voice);
}

function Cat(name, color) {
  Animal.call(this, 'Meow');
  this.name = name;
  this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

var fluffy = new Cat('Fluffy', 'White');
console.log(fluffy);

console.log(fluffy instanceof Cat);
console.log(fluffy instanceof Animal);
