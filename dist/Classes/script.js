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
