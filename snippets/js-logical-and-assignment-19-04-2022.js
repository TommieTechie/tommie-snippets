let falsy = 0;
let truthy = 1;
let fruit = "Bananas"

falsy &&= 7;
// The falsy variable would remain 0, because it is a falsy value.

truthy &&= 8;
// The truthy variable would become 8, because it is a truthy value.

fruit &&= "Strawberry";
// The fruit variable is also a truthy value, which assigns it to "Strawberry".