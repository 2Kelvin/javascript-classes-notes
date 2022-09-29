class Square {
    constructor(oneSide) {
        this.width = oneSide;
        this.height = this.width;
    }

    static compareSquares(square1, square2) {
        return (square1.width == square2.width ? "The squares are equal" : "The squares are NOT equal");
    }

    static isItaSquare(squareObj) {
        return (squareObj.width == squareObj.height) ? "It's a square alright" : "Definitely not a square";
    }
}

let mySquare = new Square(12);
console.log(mySquare);

let aSquare1 = new Square(14);
let aSquare2 = new Square(11);
console.log(Square.compareSquares(aSquare1, aSquare2));
// use the class to access a static method as shown above

let mySquare2 = new Square(9);
console.log(Square.isItaSquare(mySquare2));
mySquare2.height = 6;
console.log(mySquare2);
console.log(Square.isItaSquare(mySquare2));

// static methods do not require instances to work