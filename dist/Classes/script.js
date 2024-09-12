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
