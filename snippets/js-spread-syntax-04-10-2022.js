// Use the elements of an array as arguments to a function.
const logMeal = (breakfast, lunch, dinner) => {
  console.log(breakfast, lunch, dinner);
};

const arguments = ["bagel🥯", "salad🥗", "pad Thai🥡"];
logMeal(...arguments);

// Spread syntax in arrays:
const missingParts = ["get", "bitter"];
const quote = ["don't", ...missingParts, "just", "get", "better"];
// ["don't", "get", "bitter", "just", "get", "better"]

// Cloning an array:
const fruitsArray = ["banana🍌", "cherry🍒", "pear🍐"];
const fruitsArrayCopy = [...fruitsArray];

// Concatenate arrays:
const veggies1 = ["mushroom🍄", "cucumber🥒"];
const veggies2 = ["onion🧅", "garlic🧄"];

const veggies = [...veggies1, ...veggies2];
// ["mushroom🍄", "cucumber🥒", "onion🧅", "garlic🧄"]

// Spread syntax in objects
const tea = { type: "Green" };
const cat = { name: "Garfield", breed: "Tabby Persian cat" };

const clonedObject = { ...cat };
// Object { name: "Garfield", breed: "Tabby Persian cat" }

const newObject = { ...tea, ...cat };
// Object { type: "Green", name: "Garfield", breed: "Tabby Persian cat" }
