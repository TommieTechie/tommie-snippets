/*
    To define a type alias, write the type keyword, 
    followed by the name of the alias of your choice (which would be PiConstant in the example),
    followed by an equal sign, and the type that you want to alias.
*/

interface Pie {
  cookedOn: Date;
  emoji: string;
  flavour: string;
  pi: PiConstant;
}

/*
      After defining your first type alias, you can define it any place where you’d use that original type.
       For example, we can refactor the Pie interface, changing the type of the pi field from number to PiConstant. 
  */
let applePie: Pie = {
  cookedOn: new Date("08-11-2022"),
  emoji: "🥧",
  flavour: "Apple🍎",
  pi: 3.14159,
};

/* 
      Also, if we wanted to change all of the PiConstant references, 
      we could simply change the type that the PiConstant is referring to.
  */
type PiConstant = number;
