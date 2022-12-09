interface Recipe {
  name: string;
  durationInMinutes: number;
}

// An example of generic constraints used with interfaces
interface VegetarianRecipe<TypeVegan> {
  name: string;
  durationInMinutes: number;
  isVegan: TypeVegan;
}

// A function example of generics constraints used in a function.
function duplicate<Type1, Type2 extends Type1>(obj: Type1): Type2 {
  return { ...obj };
}

const sushi: Recipe = { name: "Sushi", durationInMinutes: 60 };
const sushiClone = duplicate<Recipe, VegetarianRecipe>(sushi);
