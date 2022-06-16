// We can create a promise with the Promise constructor.
const spaghettiRecipe = new Promise((resolve) => {
  console.log("Cooking...🍽️, the spaghetti will ready in 2 seconds!");

  // Here are instructions on how to get the final value:
  const spaghetti = "Dinner is ready!🍝";

  // Any code requiring time can be in a promise:
  setTimeout(() => {
    // The resolve value is what matters:
    resolve(spaghetti);
  }, 2000);
});

const cookSpaghettiRecipe = async () => {
  // Await this function and store the resolved value in a variable:
  const result = await spaghettiRecipe;
  console.log(result);
};

cookSpaghettiRecipe();
