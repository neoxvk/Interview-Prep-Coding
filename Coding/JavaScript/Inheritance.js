// Parent constructor
function Animal(name) {
  this.name = name;
}

// Adding a method to the Animal prototype
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

// Child constructor
function Dog(name, breed) {
  // Call the Animal constructor to initialize name
  Animal.call(this, name);
  this.breed = breed;
}

// Set up inheritance using the prototype
Dog.prototype = Object.create(Animal.prototype);

// Restore the constructor reference
Dog.prototype.constructor = Dog;

// Adding a method to the Dog prototype
Dog.prototype.bark = function () {
  console.log(`${this.name} barks loudly!`);
};

// Create an instance of Dog
const doggy = new Dog("Charlie", "Golden Retriever");

// Call the methods
doggy.speak(); // Output: Charlie makes a noise.
doggy.bark(); // Output: Charlie barks loudly!
