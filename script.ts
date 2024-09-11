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
let variable: any;
variable = "12";
variable = 12;
