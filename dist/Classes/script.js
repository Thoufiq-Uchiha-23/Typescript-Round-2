"use strict";
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
    constructor() {
        this.color = "white";
        this.tonnes = 75;
        this.company = "voltas";
        this.temperature = 22;
    }
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
    constructor() {
        this.price = 1200;
    }
    eat() {
        console.log("eating");
    }
}
class Mithaai extends Food {
    constructor() {
        super(...arguments);
        this.name = "Mitha";
    }
}
let mitha1 = new Mithaai();
mitha1.eat;
// Constructors
// constructor class ka special method hota hai jiska kaam hai sab se pehle
// chalna and saare variables jo initialize karna
// Example 4
class Pendrive {
    constructor(name) {
        this.company = name;
    }
}
let p1 = new Pendrive("sandisk");
let p2 = new Pendrive("hp");
// Example 5
class Earphones {
    constructor(name, price) {
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
    constructor(name, email, password, image) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.image = image;
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
    constructor() {
        this.name = "Pendrive";
    }
    getName() {
        console.log(this.name);
    }
}
let pen1 = new Pendrive2();
pen1.name = "Super Pendrive";
// Private
class User2 {
    constructor() {
        this.balance = 1200;
    }
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
    constructor() {
        this.balance = 1200;
    }
}
class Admin extends User3 {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
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
    constructor() {
        this.balance = 1200;
    }
    setBalance(balance) {
        this.balance = balance;
    }
}
class Abcd2 {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}
let abcd1 = new Abcd2("thoufiq");
abcd1.getName();
// Getters and Setters
class Abcd3 {
    constructor(username) {
        this.username = username;
        this.username = username;
    }
    get name() {
        return this.username;
    }
    set name(value) {
        this.username = value;
    }
}
let abcd2 = new Abcd3("thoufiq");
abcd2.name = "thoufi";
console.log(abcd2.name);
class Animal {
    constructor(name) {
        this.name = name;
    }
    get animalname() {
        return this.name;
    }
    set animalnames(name) {
        this.name = name;
    }
}
let an1 = new Animal("bhaalu");
an1.animalnames = "hiran";
console.log(an1.animalname);
// Functions
function bankai() {
    return "hey";
}
