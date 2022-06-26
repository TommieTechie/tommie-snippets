// JavaScript constructors are generally known for their usage in ES6 classes.
class CincoDeMayo {
  constructor(month, day) {
    this.month = month;
    this.day = day;
  }
}

// However, they have uses in creating different JavaScript objects. For example, they can be used to create a string!
const today = new String("Cinco de Mayo!");

// Constructors can be used to transform a number to a string as well!
const five = new String(5);

// They can also be used for creating empty arrays!
const tacos = new Array(3);
const burritos = new Array(5);

tacos[0] = "🌮";
// Tacos now return: ['🌮', undefined, undefined]

// Or, for creating a Set or a Map object:
const greeting = new Set(["Happy Cinco de Mayo!"]);

const meals = new Map();
meals.set("Tamale🫔", 2);
meals.set("Horchata🥛", 4);
meals.set("Guacamole🥑", 10);

// In JavaScript, everything is an object! This is why with these constructors, you can create an instance of the different classes the language offers you!
