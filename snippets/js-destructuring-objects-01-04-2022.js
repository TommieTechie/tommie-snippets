const vietnam = {
  capital: "Hanoi",
  largestCity: "Ho Chi Minh (formerly Saigon)",
  currency: "Vietnamese đồng (VND)",
  timeZone: "UTC+07:00",
  drivingSide: "right",
  callingCode: "+84",
};

// Destructuring a single variable
const { capital } = vietnam;
console.log(capital);

// Extracting a value that does not exist in an object yet.
const { abbreviation = "VN" } = vietnam;
console.log(abbreviation);

// Extract a value and rename it
const { timeZone: tz } = vietnam;
console.log(tz);

// Extracting from a function
const getCities = ({ capital, largestCity }) => {
  return `The capital is ${capital} and the largest city is ${largestCity}.`;
};
console.log(getCities(vietnam));
