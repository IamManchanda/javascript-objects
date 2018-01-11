/**
 * JavaScript Objects!
 */

/* eslint-disable */
'use strict';

var cat = {
  name: {
    first: 'Fluffy',
    last: 'Cluffy',
  },
  color: 'White',
};

Object.defineProperty(cat, 'name', {
  // writable: false,
  // enumerable: false,
  // configurable: false,
});

Object.defineProperty(cat, 'fullName', {
  get: function () {
    return `${this.name.first} ${this.name.last}`;
  },
  set: function (value) {
    var nameParts = value.split(' ');
    this.name.first = nameParts[0];
    this.name.last = nameParts[1];
  }
});

cat.fullName = 'Muffin Top';

// cat.name.first = 'Scratchy';
// console.log(Object.getOwnPropertyDescriptor(cat, 'name'));

// for (var propertyName in cat) {
//   console.log(`${propertyName}: ${cat[propertyName]}`);
// }
// console.log(JSON.stringify(cat));

// delete cat.name;

console.log(cat);
