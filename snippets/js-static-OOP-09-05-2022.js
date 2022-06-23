// Mock data from a Garden API
const vegetables = {
  "tomato🍅": 5,
  "potato🥔": 10,
};

// Static methods are a good way to wrap a REST API and encapsulate it. Here, we are mocking a subset of REST methods around a Garden API.
class GardenAPI {
  static getAllVeggies = () => {
    return vegetables;
  };

  static eatVeggie = (veggie) => {
    vegetables[veggie] = vegetables[veggie] - 1;
  };

  static water = () => {
    for (const veggie of Object.keys(vegetables)) {
      vegetables[veggie] = vegetables[veggie] + 1;
    }
  };
}

// Get all the veggies!
console.log("We start with these veggies: ", GardenAPI.getAllVeggies());

// Eat one and see how many are left!
GardenAPI.eatVeggie("potato🥔");
console.log("What's left to eat: ", GardenAPI.getAllVeggies());

// Let's water the veggies plants!
GardenAPI.water();
console.log("Watering the following veggies: ", GardenAPI.getAllVeggies());

// Static methods have other uses as well (which, we'll explore more later on)!
