const reverse = (string) => {
  return [...string].reverse().join("");
};

reverse("Tommie");

// Here are the steps:
// 1. [...string] will return: ["T", "o", "m", "m", "i", "e"]

// 2. [...string].reverse() returns: ["e", "i", "m", "m", "o", "T"]

// 3. [...string].reverse().join("") returns: "eimmoT"
