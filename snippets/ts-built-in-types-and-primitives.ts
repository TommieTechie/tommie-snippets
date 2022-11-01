/* 
    If you hover over variable a, you should be able to see the type inference.
    Once you remove the assignment, TypeScript will not have enough info to infer anymore.
*/
let a = 7;

// Here's examples of how to explicitly define a variable's type: 
let name: string;
let age: number;
let isHungry: boolean;
let date: Date;
let pets: string[];

/*
    If you try to assign one of the variables to a wrong type, TS will show you errors.
    Try to fix this if you can!
*/
pets = 12345;

/*  
    Did you intentionally want to assign a different type to your variable?
    This is where the any type comes in!
*/
let animals: any;
animals = ["dog🐶", "monkey🐵" ,"whale🐳"];
animals = 6789;

/*
    Rather than defining holiday as any, I can cast the number value I want to the any type instead.
*/

let holiday: number;
holiday = "Día de los Muertos" as any;