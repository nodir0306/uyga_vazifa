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

















abstract class Shape {
    abstract getArea(): number;
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }
}


const myRectangle = new Rectangle(5, 10);
console.log(myRectangle.getArea());
