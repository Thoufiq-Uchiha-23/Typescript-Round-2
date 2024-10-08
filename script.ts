/*
types
types has 2 types a) primitives b) references
a) primitives - number boolean undefined string characters
b) references - objects classes function arrays tuples
Typescript is nothing but JavaScript with few more features
*/

/*
Basic Types
+ Number, String, Boolean
+ Arrays, Tuples
+ Any, Unknown, Never, Void
+ Enums
*/
// primitive examples
// let a : number;
// let a = "hey";

// array example for references types
// let arr: [];

// If we directly give value then we don't need to
// specify type
// let str = "hey";
// if we have no value then we give type
// let variable: boolean;
// let variable: number;
// let variable: [];
// let variable: string;

// TUPLES
let arr: [number, string] = [1, "hey"];
let arr2: [boolean, number, string] = [false, 12, "hey"];

console.log(arr);
console.log(arr2);

// ANY type
// let variable: any;
// variable = "12";
// variable = 12;

// UNKNOWN - unknown is similar to any type with few differences
// let variable: unknown;
// variable = "12";
// variable = 12;

// NEVER type - it's used during when function returns nothing and whenever fuction
// of never type runs it'snot going to flow for other code

function runInfinite(): never {
  while (true) {
    console.log("infinite run");
  }
}

runInfinite();
console.log("hey");

// VOID: this means that the function will not return anything
function abcd(): void {
  console.log("hey");
}

abcd();

// ENUMS: there are the custom types made by us as a group
// Instead of
let upDirection = "UP";
let downDirection = "DOWN";
let rightDirection = "RIGHT";
let leftDirection = "LEFT";

// We can do as
enum Direction {
  top = "TOP",
  left = "LEFT",
  right = "RIGHT",
  bottom = "BOTTOM",
}

Direction.top;

// TYPE INFERENCE - inference type is a type which infer/guesses on it's own of what type it is
let a = 12;
let b = "a";
let c = true;

// UNION AND INTERSECTION TYPES
// UNION : union type means we can keep more than one type where it uses or operation
let variable: string | null;
variable = null;
variable = "harsh";

function abcde(variable: number | string) {
  if (typeof variable === "number") {
    variable.toFixed(2);
  } else if (typeof variable === "string") {
    variable.toUpperCase();
  }
}

abcde(12);
abcde("12");
abcde("hero");
// abcde(true) // for this we get error bcoz we have not defined boolean value in the function

// INTERSECTION TYPES - It is the intersection or combination of 2 or more custom types using & operation
// type - is used to make custom datatypes
// Classmate type
type Classmates = {
  section: string;
};
// Students type
type Students = {
  name: string;
};
// Intersection of both Classmates and Students type
type ClassmateInStudents = Classmates & Students;

let classStudent: ClassmateInStudents = {
  name: "thoufiq",
  section: "a",
};

// Example 2
type City = {
  name: string;
  population: number;
};

type Planet = {
  name: string;
  cities: number;
};

type CitiesInPlanet = City & Planet;

let value: CitiesInPlanet = {
  name: "Bengaluru",
  population: 1200000000,
  cities: 12,
};
