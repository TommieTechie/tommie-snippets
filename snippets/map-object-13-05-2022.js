// Creating a map is done by creating a new instance:
const dogBreeds = new Map();

// A JS Map object is about holding key-value pairs.
// Let’s store some dogs’ names and associate their names to their breed!
dogBreeds.set("Chowmein", "Chow Chow");
// My dog Chowmein is a Chow Chow.

dogBreeds.set("Goldilocks", "Golden Retriever");
// My neighbour's dog Goldilocks is a Golden Retriever.

dogBreeds.set("Lassie", "Rough Collie");
// My classmate's dog Lassie is a Rough Collie.

// We can check if a particular key is already in a Map object. 🗺️
dogBreeds.has("Marmaduke");
// This will return false, because Marmaduke was not previously included in dogBreeds.

// We can also verify what is the value of a certain key. 🗝️
dogBreeds.get("Goldilocks");
// This will return: "Golden Retriever"

// Finally, we can also iterate over all the elements of the Map object 🔂
for (const dog of dogBreeds.keys()) {
  console.log(dogBreeds.get(dog));
}
// This will return: "Chow Chow", "Golden Retriever", "Rough Collie"
