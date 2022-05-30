// Rejecting a promise can happen for many reasons. For example, if we have a network error, or if we have a problem with the data we are getting from the server.

// Let's imagine such a scenario: We have an order for dumplings but we fried them instead of boiling them like the order says.

// We only have a recipe for fried dumplings!
const dumplingsRecipe = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fried Dumplings 🍜");
    }, 1000);
  });

// We now receive an order for boiled dumplings!
const boiledDumplingsOrder = () =>
  new Promise((resolve, reject) => {
    // we have to cook our dumplings with our only recipe!
    dumplingsRecipe().then((dumplings) => {
      // if we cook our dumplings correctly, we can resolve the promise
      if (dumplings === "Boiled Dumplings 🍜") {
        resolve(dumplings);
        // if we cook our dumplings incorrectly, we can reject the promise.
      } else {
        reject("This is not the dumplings I ordered!");
      }
    });
  });

boiledDumplingsOrder().catch(console.error);
