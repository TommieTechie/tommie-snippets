// do...while statements always run the code at least once
// at the beginning before entering the condition.
let appleQuantity = 3;

do {
  appleQuantity = appleQuantity - 1;
} while (appleQuantity > 0);

// while statements will first enter the condition first
// before executing the code.
let mangoQuantity = 3;

while (mangoQuantity > 0) {
  mangoQuantity = mangoQuantity - 1;
}
