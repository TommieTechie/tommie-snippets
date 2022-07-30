const cart = {
  123: {
    name: "Banh mi sandwich",
    quantity: 4,
    price: 20,
  },
  567: {
    name: "Bowl of pho",
    quantity: 6,
    price: 1,
  },
};

const result = Object.entries(cart).map((entry) => {
  const key = entry[0];
  const value = entry[1];

  return {
    itemId: key,
    price: value.quantity * value.price,
  };
});

// 1. Object.entries(cart) will return:
// [
// 	[
//   "123", {
//     name: "Banh mi sandwich",
//     quantity: 4,
//     price: 20
//   	}
// 	],
// 	[
//   "567", {
//     name: "Bowl of pho",
//     quantity: 6,
//     price: 1
//   }
// 	]
// ]

// 2. .map will be used to create a new array

// 3. Destructure key to be the first value in the array, which will be "123" or "456".

// 4. Destructure value to be the second value, which is the first object, or second object.

// 5. Return a new object with the keys and the new object with the updated price.

console.log(result);
