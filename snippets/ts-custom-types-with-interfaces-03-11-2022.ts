// An interface with a property that is optional, and with the Address interface merged into it.
interface Friend extends Address {
  name: string;
  age?: number;
  birthday: Date;
}

// Another interface that can be used anywhere else in the application.
interface Address {
  line: string;
  region: string;
  country: string;
  postalCode: string;
}

/*
    Feel free to play the content of the variable and:
    - Test the autocomplete feature of TypeScript.
    - Assign one of the fields in the object a wrong type.
    - Remove the optional field from the object.
*/
let rupaul: Friend = {
  name: "RuPaul",
  age: 61,
  birthday: new Date("17-11-1960"),
  line: "123 Dragstreet",
  region: "California",
  country: "United States of America",
  postalCode: "12345",
};
