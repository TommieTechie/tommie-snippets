const satisfactionTipRatio = new Map([
  ["Correct", 0.1],
  ["Good", 0.15],
  ["Great", 0.2],
]);

/** 
  calculateTip is used to easily calculate tips and the total price.
  @param {number} price - The original price of the meal as a number.
  @param {string | number} qualityOrRate - A service quality string such as 'Good', 'Correct'  or 'Great. 
  You can also pass a number such as 0.25 for 25% if you want to do your own custom tip amount.
  @returns {number} the price to pay, plus the tip.
  */
const calculateTip = (price, qualityOrRate) => {
  // Check if the user has passed a quality or a percentage (%).
  if (satisfaction.has(qualityOrRate)) {
    // Calculate based on the pre-defined service satisfaction.
    return price + price * tipsQuality.get(qualityOrRate);
  }
  // If the user passes a custom tip rate, we calculate it.
  if (typeof qualityOrRate === "number") {
    return price + price * qualityOrRate;
  }

  // Return the price if the user leaves no tips.
  return price;
};
