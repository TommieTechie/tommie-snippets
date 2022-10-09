const teach = (sport, language, ...subjects) => {
  console.log("Sport:", sport);
  console.log("Language:", language);
  console.log("Other subjects:", subjects);
};

teach("Swimming", "JavaScript", "Algebra", "English", "CSS");
/*
    Sport: "Swimming"
    Language: "JavaScript"
    Other subjects: ["Algebra", "English", "CSS"]
*/

// Despite that we're just giving one value for the rest parameter, it still becomes an array:
teach("Boxing", "French", "UX Design");
/*
    Sport: "Boxing"
    Language: "French"
    Other subjects: ["UX Design"] 
*/

// Combining rest parameters with regular parameters:
function filterAdults(limit, ...ages) {
  return ages.filter((age) => age >= limit);
}

const adults = filterAdults(18, 25, 3, 42, 11, 78);
console.log(adults); // [25, 42, 78]
