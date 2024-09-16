// Example 1
// class Airpod{
//     price = 25000;
//     image = "images/airpod";
//     color = "white";

//     playMusic() {
//         console.log("music playing...");
//     }

//     switchMode(mode: string) {
//         console.log(mode);
//     }
// }

// Example 2
class AirConditioner {
  color = "white";
  tonnes = 75;
  company = "voltas";

  temperature = 22;

  // features
  turnOn() {
    console.log("turning on...");
    console.log("turned on...");
  }

  turnOff() {
    console.log("turning off...");
    console.log("turned off...");
  }

  raiseTemperature() {
    // console.log("temperature raised by 1");
    this.temperature++;
    console.log(this.temperature);
  }

  decreaseTemperature() {
    console.log("decreasing temperature by 1");
  }
}

// Example 3
class Food {
  price = 1200;

  eat() {
    console.log("eating");
  }
}

class Mithaai extends Food {
  name = "Mitha";
}

let mitha1 = new Mithaai();
mitha1.eat;

// Constructors
// constructor class ka special method hota hai jiska kaam hai sab se pehle
// chalna and saare variables jo initialize karna
// Example 4
class Pendrive {
  // declare/ define
  public company: string;

  constructor(name: string) {
    this.company = name;
  }
}

let p1 = new Pendrive("sandisk");
let p2 = new Pendrive("hp");

// Example 5
class Earphones {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

let e1 = new Earphones("Apple", 25000);
let e2 = new Earphones("Oppo", 2500);

// User class
class User {
  // public name: string;
  // public email: string;
  // public password: string;
  // public image: string;

  constructor(
    public name: string,
    public email: string,
    public password: string,
    public image: string
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.image = image;
  }
}

/* 
ACCESS MODIFIERS
PUBLIC, PRIVATE, PROTECTED MEMBERS
 */

class Pendrive2 {
  name = "Pendrive";
  getName() {
    console.log(this.name);
  }
}

let pen1 = new Pendrive2();
pen1.name = "Super Pendrive";

// Private

class User2 {
  private balance = 1200;

  getBalance() {
    console.log(this.balance);
  }
}

let u1 = new User2();
// Property 'balance' is private and only accessible within class 'User2'
// u1.balance = 12000

// public - public matlab poori class main use karo aur bahar bhui access kar sakte ho class ke
// via instance
// private - private matlab sird class main hi wo element use ho sakta hai aap
// usey baahar use nahi kar sakte

// Protected - khudke class main bhi or dusre class main jahan woh extend hota hai
class User3 {
  protected balance = 1200;
}

class Admin extends User3 {
  private isAdmin = true;
  getBalance() {
    this.balance;
  }
}

// public ek dum khula
// private ek dum closed
// protected khudke andar use karro and jo class aapke main class ko extend karey wha use karo

// Ek bug yeh hai ki jab hum koi private var banate hai tab
// agar usko kisi function usi ke class ke undar se dusre var ko dede fir us value
// hum change kar sakte hai, so to fix that make fun/var private/protected
class Abcd {
  private balance = 1200;
  protected setBalance(balance: number) {
    this.balance = balance;
  }
}

class Abcd2 {
  constructor(public readonly name: string) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }

  // Cannot assign to 'name' because it is a read-only property.
  // setName(name: string) {
  //   this.name = name
  // }
}

let abcd1 = new Abcd2("thoufiq");
abcd1.getName();

// Getters and Setters
class Abcd3 {
  constructor(public username: string) {
    this.username = username;
  }

  get name() {
    return this.username;
  }

  set name(value: string) {
    this.username = value;
  }
}

let abcd2 = new Abcd3("thoufiq");
abcd2.name = "thoufi";
console.log(abcd2.name);

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  get animalname() {
    return this.name;
  }

  set animalnames(name: string) {
    this.name = name;
  }
}

let an1 = new Animal("bhaalu");
an1.animalnames = "hiran";
console.log(an1.animalname);

// Functions
function bankai(): string {
  return "hey";
}

// Named Function/ normal function
// function bankai(): void {
// }

// Anonymous Function - function with no name
// function(): void{
// }

// Arrow Function
// const rasengan = (): void => {
//   console.log("hey");
// }

// Implicit return type - here we have not specified which type of value we are returning
// function amaterasu() {
//   return "hey";
// }

// Explicit return type - here we have specified that we will return string type
// function amaterasu():string {
//   return "hey";
// }

// Optional Parameters /optional fields
// these are fields where we add "?" to make it optional which is not necessary
// function user(name: string, age: number, gender?:string){

// }
// if in any case we don't want to give one field or parameter then we use optional field
// user("thoufiq", 20)

// Default Parameter - in this even when we don't give value still the default value
// will be set
// function default_example(name: string = "default"){
//   console.log(name);
// }

// default_example();
// O/P: default
// default_example("thoufiq");
// O/P: thoufiq

// Rest Parameters - in this we spread the parameters as when the size is unknown
function names(...names: string[]) {
  console.log(names);
}

names("harsh", "sumit", "raghav", "thoufiq");

// Type Assertions
function assert() {
  // const p = document.querySelector("p")
  // in TS we use this DOM as
  (document.querySelector("p") as HTMLDivElement)
}