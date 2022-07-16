Math.max(10, 20, 30, 40);
// This would return 40.

Math.min(10, 20, 30, 40);
// This would return 10.


const numbers = [50, 60, 70, 80, 90 ,100];
console.log(Math.max(...numbers));
// First, spread the numbers array in the argument, then call Math.max()!