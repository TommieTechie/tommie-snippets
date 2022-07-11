// If the number provided is not 1, the factorial function will call itself!

const factorial = (number) => {
    if (number === 1) {
      return number;
    }
    
      return number * factorial(number - 1);
  }
  
  factorial(1);
  // This call returns 1.
  
  factorial(4);
  // This would return 4 * 3 * 2 * 1, which equals to 24.