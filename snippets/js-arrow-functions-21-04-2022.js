/*
Arrow functions are one of the popular ES6 features. 
They introduced a new way of writing concise functions ➡️

Can you spot the differences between the two different ways of defining functions?
If not, the main difference is the function keyword and the arrow => symbol.
When we call both of them, they output the same result though!
*/

// Function expression
function packLunch(lunch, beverage) {
  return [lunch, beverage];
}

// Arrow function expression
const packLunch = (lunch, beverage) => [lunch, beverage];

console.log(packLunch("Spaghetti 🍝", "Red wine 🍷"));
// This will output to the console: ["Spaghetti 🍝", "Red wine 🍷"];

/*
If you just have one parameter to pass, you’re not using rest parameters, or destructuring, parentheses are optional!
If that’s not the case, include your parentheses!
*/

// Arrow functions with no parameters requires parentheses.
const stomachStatus = () => "I'm hungry!";

// Arrow functions with a single parameter doesn't require parentheses.
const dailySnack = (snack) => `Today's snack is ${snack}`;

// Arrow functions with more than 1 parameter requires parentheses.
const packLunch = (lunch, beverage) => [lunch, beverage];

// Arrow functions using the rest parameter.
const packOnlyLeftovers = (beverage, ...leftovers) => leftovers;
console.log(packOnlyLeftovers("Soy milk🥛", "Curry🍛", "Pierogi🥟"));
// This outputs: ["Curry🍛", "Pierogi🥟"].

// Arrow functions using destructuring.
const beverages = {
  juice: "Apple🍎",
  tea: "Green🍵",
};

const packDrinks = ({ juice }) => juice;

console.log(packDrinks(beverages));
// This outputs to the console: "Apple🍎"

/*
If you return only one line of code, you can ignore the return keyword and curly brackets.
However, if the body of your function contains multiple lines, wrap it in curly brackets and include a return statement!
*/
// Arrow function returning a value implicitely.
const cookLunch = (ingredient) => [ingredient, "Rice🍚"];

// Arrow function using curly brackets and the return keyword.
const cookLunch2 = (ingredient) => {
  const ingredients = ["Rice🍚"];
  ingredients.push(ingredient);

  return ingredients;
};

/*
Last but not least, you can also return an object. 
Just make sure to wrap your object in parentheses when returning it.
*/

const todaysLunch = () => ({
  meal: "Taco🌮",
  dessert: "Chocolate chip cookie🍪",
});

console.log(todaysLunch().meal);
// This outputs to the console: "Taco🌮".
