// An interface with a typed method in it.
interface Party {
  occasion: string;
  numOfPeople: number;
  date: Date;
  clone(example: string): Party;
}

// A function example with a typed parameter and a return type.
const clone = (obj: Party): Party => {
  return { ...obj };
};

// A function example with a function included in the parameters.
const clone2 = (obj: Party, func: (obj: Party) => Party): Party => {
  return { ...obj };
};
