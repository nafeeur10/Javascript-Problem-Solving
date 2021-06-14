/*
Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person
*/

var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  let first, last;

  this.setFirstName = function(first) {
      this.first = first;
  }

  this.setLastName = function(last) {
    this.last = last;
  }

  this.setFullName = function(firstAndLast) {
    this.setFirstName(firstAndLast.split(" ")[0]);
    this.setLastName(firstAndLast.split(" ")[1]);
  }

  this.getFirstName = function() {
    return this.first ? this.first : firstAndLast.split(" ")[0];
  }

  this.getLastName = function() {
    return this.last ? this.last : firstAndLast.split(" ")[1];
  }

  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName();
  };

  return firstAndLast;
};

var bob = new Person('Bob Ross');
//bob.getFullName();
bob.setFirstName("Nafeeur");
console.log(bob.getFullName())
