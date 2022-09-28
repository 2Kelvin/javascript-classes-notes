// classes create objects -->  i.e. objects are derived from classes
// an object created from a class is called an instance
// an object instance has properties/state and methods/functions
// a class' constructor only runs once; when the object is being created 
//  a constructor is just a method used to setup objects 
// every class has a constructor 
// keyword 'this' refers to the current object
// i.e. the current object being created by that class
// a class' methods are defined AFTER the constructor
// basically, a class creates the structure for objects
// it's a blue-print for objects
// ...what properties & methods they'll have 
class Rectangle {
    constructor(widthParam, heightParam, colorParam) {
        console.log("A rectangle object instance is being created");
        this.width = widthParam;
        this.height = heightParam;
        this.color = colorParam;
    }

    rectangleArea() {
        return this.width * this.height;
    }
    printRectDescription() {
        console.log(`This rectangle has a height of ${this.height}, a width of ${this.width} and has a fill color of ${this.color}. Its area amounts to ${this.rectangleArea()}.`);
    }
}

const myRectangle1 = new Rectangle(8, 5, "orange");
console.log(myRectangle1);

let myRectangle2 = new Rectangle(15, 11, "siena");
console.log(myRectangle2);

console.log(myRectangle1.rectangleArea());
console.log(myRectangle2.rectangleArea());

myRectangle1.printRectDescription();
myRectangle2.printRectDescription();

// GETTERS & SETTERS