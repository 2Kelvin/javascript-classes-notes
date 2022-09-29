// parent class
class Person {
    constructor(nameParam, ageParam) {
        this.name = nameParam;
        this.age = ageParam;
    }

    personDescription() {
        return (`I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

// child class that inherits from the parent class
class Programmer extends Person {
    constructor(nameParam, ageParam, career, experienceYrs) {
        super(nameParam, ageParam);
        // custom Programmer class props & methods
        this.career = career;
        this.experienceYrs = experienceYrs;
    }

    coding() {
        return (`Hi am ${this.name}, a ${this.career}, and I've been coding for ${this.experienceYrs} years.`);
    }
}

function developSoftware(programmersArr) {
    for (let programmer of programmersArr) {
        console.log(programmer.coding());
    }
}

// an array of programmers
const programmers = [
    new Programmer("Fireship", 29, "Software Developer", 5),
    new Programmer("Anna Kublow", 33, "Software Developer", 10),
    new Programmer("Mosh", 36, "Software Developer", 15)

];

// creating a Person 
let john = new Person("John", 32);
console.log(john);
console.log(john.personDescription());

// creating a Programmer 
let kelvin = new Programmer("Kelvin", 25, "Frontend Developer", 2);

console.log(kelvin);
console.log(kelvin.personDescription());
console.log(kelvin.coding());

developSoftware(programmers);