document.querySelector('.menu').textContent ||= 'Where is my menu? 🥢'

/* This is a nice use of the logical OR assignment.
   In this example, if the HTML element with the class 'menu' contains nothing (falsy value),
   it will be assigned: 'Where is my menu? 🥢'. 
   If it does contain something (truthy value), then it will not assign anything.
*/