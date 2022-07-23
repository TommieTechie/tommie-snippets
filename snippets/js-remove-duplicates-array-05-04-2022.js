const countries = [
  "United States",
  "Canada",
  "Nigeria",
  "India",
  "Vietnam",
  "Vietnam",
  "United Kingdom",
];

const countriesSet = Set(countries);
// countriesSet's value would be: {"United States", "Canada", "Nigeria", "India", "Vietnam", "United    Kingdom"};

const countriesArray = [...countriesSet];
// Spread the countriesSet object to put it back into an array form.

console.log(countriesArray);
// ["United States", "Canada", "Nigeria", "India", "Vietnam", "United Kingdom"];
