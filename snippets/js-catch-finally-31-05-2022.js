// let's imagine imagine two recipes for tacos and burrito. Maybe the recipes will be bad and cause the promises to reject.
const tacosRecipe = () =>
  new Promise((resolve) => {
    const isTheTacoGood = Math.floor(Math.random() * 3) + 1 > 1;
    setTimeout(() => {
      if (isTheTacoGood) {
        resolve("🌮");
      }
      reject("This is not the tacos I ordered!");
    }, 1000);
  });

const burritoRecipe = () =>
  new Promise((resolve, reject) => {
    const isTheBurritoGood = Math.floor(Math.random() * 3) + 1 > 1;
    setTimeout(() => {
      if (isTheBurritoGood) {
        resolve("🌯");
      }
      reject("This is not the burrito I ordered!");
    }, 1000);
  });

// You are really hungry and you want to order tacos and burritos.
const tacosBurrito = async () => {
  // you can use a try... catch statement to catch any errors
  try {
    const tacos = await tacosRecipe();
    const burrito = await burritoRecipe();
    console.log(`I ordered ${tacos} and ${burrito}`);
  } catch (error) {
    // the catch statement will catch any errors that are thrown in the promises.
    // this is the good moment to log these errors to a error reporting service like Sentry.
    console.error(error);
    console.error("If you can't cook tacos or burrito i'll eat salsa");
  } finally {
    // the finally statement will always run. It is used to clean up after the promises.
    // you can recover from error/loading states by using the finally statement.
    console.log("bring me the check please!");
  }
};

tacosBurrito();

// advanced bits:
// if a promise is rejected, .then accepts a second argument called onRejected which is a function that will be called if the promise is rejected.
// this is useful to attempt a retry or to handle errors. The second argument is optional.
