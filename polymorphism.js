class Animal {
    constructor(nameParam) {
        this.name = nameParam;
    }

    makeSound() {
        return `The ${this.name} is making a sound`;
    }
}

class Cat extends Animal {
    constructor(nameParam) {
        super(nameParam);
    }

    makeSound() {
        return `Roaarrr!`;
    }
}

let donkey = new Animal("Donkey");
console.log(donkey.makeSound());

let lion = new Cat("Lion");
console.log(lion.makeSound());