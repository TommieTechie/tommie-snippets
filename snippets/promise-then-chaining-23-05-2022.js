// same Promise as fridays post.
const spaghettiRecipe = new Promise((resolve) => {
  console.log("Cooking...🍽️, the spaghetti will ready in 2 seconds!");

  const spaghetti = "Dinner is ready!🍝";
  setTimeout(() => {
    // We will need this value in other promises.
    resolve(spaghetti);
  }, 2000);
});

const cookSpaghettiRecipe = () => {
  // Simply typing the promise will kick it off, but that won't do much:
  spaghettiRecipe;

  // We need to capture the resolved value. We can do this with the .then method on our promise object. The .then accepts a function:

  spaghettiRecipe
    // This function received the promise's resolved value as its argument!
    .then((resolvedValue) => {
      console.log("Resolved value of first promise: ", resolvedValue);
      // This will resolve as: 'Dinner is ready!🍝' 'Dinner is ready!🍝'
      return resolvedValue.repeat(2);
    })
    // You can chain .then endlessly, as .then itself returns a promise. Kinda like the movie Inception!

    // The return value of the previous .then function will be the resolved value of this new promise.
    .then((resolvedValue2) => {
      console.log("Resolved value of second promise: ", resolvedValue2);
    });
};

cookSpaghettiRecipe();
