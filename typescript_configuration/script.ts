console.log("hey");
// command to create ts.config.json file is
// tsc --init
// command to make save automatically and keep on watch is
// tsc --watch
let one = 12;
const two = 22;

console.log(one, two);

// TYPE ALIASES
// primitive type aliases
type Name = string

let naam: Name

// object type aliases
// type Human = {
//     name: string,
//     age: number,
//     email: string,
// }

// let thoufiq: Human = {
//     name: "Thoufiq",
//     age: 20,
//     email: "thoufiq@thoufiq.com"
// }

// type User = {
//     name: string,
//     age: number,
//     email: string,
//     username: string,
// }

// let user: User = {
//     name: "Thoufiq",
//     age: 25,
//     email: "test@test.com",
//     username: "test",
// }

type Dabba = {
    weight: number,
    color: string,
}

let dabba: Dabba = {
    weight: 2,
    color: "#FFFFFF"
}

// INTERFACE - this creates objects and classes shape
interface User {
    name: string,
    age: number,
    username: string,
    email: string,
    password: string,
}

function getUser (user:User) {
    user.name
    // number type suggestion
    user.age.toPrecision
}

// Merge 2 interfaces
interface Human {
    name: string
}

interface Human {
    age: number
}

function abcd(human: Human) {
    human.name
    human.age
}

// Interfaces with extending other properties like inheritance
interface Food {
    name: string,
    price: number,
}

interface MithaFood extends Food {
    verySweet: boolean;
}

interface KhattaFood extends Food {
    verySour: boolean;
}

function getMithaai(mithaai:MithaFood) {
    mithaai.verySweet
}

function getKhattaFood(khattafood:KhattaFood) {
    khattafood.verySour
}