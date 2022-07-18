const makeup = ["Lipstick", "Eyeliner", "Mascara", "Foundation"];

const skincare = ["Moisturizer", "Toner", "Cleanser"];

// Thanks to the spread operator, extracting elements from array can be easier!
const cosmetics = [...makeup, ...skincare];

console.log(cosmetics);
// This outputs: ["Lipstick", "Eyeliner", "Mascara", "Foundation", "Moisturizer", "Toner", "Cleanser"]