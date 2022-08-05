const spaghettiRecipe = () =>
  new Promise((resolve) => {
    console.log("Cooking...🍽️, the spaghetti will ready in 2 seconds!");

    const spaghetti = "🍝";

    setTimeout(() => {
      // We will need this value in other Promises.
      resolve(spaghetti);
    }, 2000);
  });

// Add the async keyword before your argument.
const cookingTime = async () => {
  // The await keyword will capture the resolved value in the variable.
  const spaghetti = await spaghettiRecipe();

  // You can also just await a promise without capturing its resolved value.
  await spaghettiRecipe();

  return spaghetti;
};

/**
    ⚠️ These are advanced concepts. Might cause confusion if you did not understand the previous posts. ⚠️
  */

// Labelling a function as async means that it will return a promise. Afterwards, you can use .then or await it too.
cookingTime().then(console.log);
