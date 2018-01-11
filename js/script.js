/**
 * JavaScript Objects!
 */

/* eslint-disable */
'use strict';

// Original and Behind the scenes stuff
var cat = Object.create(Object.prototype, {
  name: {
    value: 'Fluffy',
    enumerable: true,
    writable: true,
    configurable: true,
  },
  color: {
    value: 'White',
    enumerable: true,
    writable: true,
    configurable: true,
  },
});
console.log(cat);

// Legacy Syntactic Sugar
function Cat2008(name, color) {
  this.name = name;
  this.color = color;
}

var cat2008 = new Cat2008('Fluffy', 'White');
console.log(cat2008);

// Modern Syntactic Sugar
// PS: JavaScript don't have classes!
class Cat2018 {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

const cat2018 = new Cat2018('Fluffy', 'White');
console.log(cat2018);
