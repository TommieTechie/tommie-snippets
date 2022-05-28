// Promise.all is usefull to run multiple promises concurrently (in parallel) and wait for all of them to finish.

// Let's create 3 promises for a full meal! Each taking a different amount of time to finish

const ceasarRecipe = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Ceasar Salad 🥗");
  }, 1000);
});

const pastaRecipe = new Promise((resolve) => {
  setTimeout(() => {
    // pasta emoji
    resolve("Pasta 🍝");
  }, 2000);
});

const friedCalamariRecipe = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Fried Calamari 🦐");
  }, 3000);
});

// Now we want to get all our orders at the same time to the table!

const order = async () => {
  // Promise.all accepts an array of promises. Let's create it
  const recipes = [ceasarRecipe, pastaRecipe, friedCalamariRecipe];
  // Now we can use Promise.all to wait for all of them to finish and then get the results
  const myFood = await Promise.all(recipes);

  // the result is an array of the results of each promise. We can use it to combine the food together!
  const myMeal = `Here is your ${myFood[0]} with ${myFood[1]} and ${myFood[2]}. All received at the same time!`;
  console.log(myMeal);
};

order();
