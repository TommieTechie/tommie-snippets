interface Today {
  occasion: string;
  date: Date;
}

// A function example using generics for the parameter and a return type.
function clone<Type>(obj: Type): Type {
  return { ...obj };
}

// Explicitly typing the variable. Hover over the function call's name to see the type.
const gamma: Today = {
  occasion: "World AIDS Day",
  date: new Date("2022-12-01"),
};
const delta = clone(gamma);

// Not explicitly typing the variable. Hover over the function call's name to see the type.
const virus = { name: "AIDS🦠", isDangerous: true };
const virusCopy = clone(virus);

// A function example with a generic typed parameter and a typed return type.
function clone2<Type1, Type2>(obj: Type1): Type2 {
  return { ...obj };
}

const alpha: Today = {
  occasion: "World AIDS Day",
  date: new Date("2022-12-01"),
};
const beta = clone2(alpha);
