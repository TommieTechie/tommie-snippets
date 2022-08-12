const numbers = [3, 99, 55, 11, 7];

numbers.sort();
// Sorts alphabetically by default when not specifying a function: [11, 3, 55, 7, 99]

numbers.sort((a, b) => a - b);
// Sorts by ascending order, from smallest to largest numbers: [3, 7, 11, 55, 99]

numbers.sort((a, b) => b - a);
// Sorts by descending order: [99, 55, 11, 7, 3]
