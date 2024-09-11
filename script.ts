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
let a = "hey";

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
let variable: unknown;
variable = "12";
variable = 12;

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
let upDirection = "UP"
let downDirection = "DOWN"
let rightDirection = "RIGHT"
let leftDirection = "LEFT"

// We can do as
enum Direction {
    top = "TOP",
    left = "LEFT",
    right = "RIGHT",
    bottom = "BOTTOM",
}

Direction.top