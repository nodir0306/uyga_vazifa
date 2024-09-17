"use strict";
// class Animal {
//     makeSound(): void {
//         console.log("ovoz ixtiyoriy");
//     }
// }
// class Dog extends Animal {
//     override makeSound(): void {
//         console.log("Woof Woof");
//     }
// }
// const myDog = new Dog();
// myDog.makeSound();
class Shape {
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const myRectangle = new Rectangle(5, 10);
console.log(myRectangle.getArea());
