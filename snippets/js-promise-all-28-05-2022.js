const saladRecipe = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Caesar Salad🥗");
  }, 1000);
});

const spaghettiRecipe = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Spaghetti🍝");
  }, 2000);
});

const calamariRecipe = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Fried Calamari🦑");
  }, 3000);
});

// Now we want to get all our orders at the same time to the table!
const order = async () => {
  // Promise.all accepts an array of promises. Let's create it!
  const recipes = [saladRecipe, spaghettiRecipe, calamariRecipe];
  // Now we can use Promise.all to wait for all of them to finish, then get the results.
  const myFood = await Promise.all(recipes);

  // The result is an array of the results of each promise. We can use it to combine the food altogether!
  const myMeal = `Here is your ${myFood[0]} with ${myFood[1]} and ${myFood[2]}. All received at the same time!`;
  console.log(myMeal);
};

order();
