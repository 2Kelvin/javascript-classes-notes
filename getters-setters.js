class Square {
    constructor(oneSide) {
        this.width = oneSide;
        this.height = oneSide;
        this.areaRequestcount = 0;
    }

    get area() {
        this.areaRequestcount++;
        return this.width * this.height;
    }

    set area(areaParam) {
        this.width = Math.sqrt(areaParam);
        this.height = this.width;
    }
}

let square1 = new Square(12);
console.log(square1.area);

square1.area = 87;
console.log(square1.height);
console.log(square1.width);

console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.areaRequestcount); // -> 4 ; including the one above