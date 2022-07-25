const banana = "yellow";

banana === "yellow"
  ? console.log(`It's ripe!`)
  : console.log(`It's not ripe yet!`);
// Condition ? If : Else

const bark = (sound) => {
  return sound === "Woof" ? "It's a dog!" : "It's not a dog.";
};

console.log(bark("Woof"));
// This outputs to the console: "It's a dog!"

console.log(bark("Meow"));
// This outputs to the console: "It's not a dog."
