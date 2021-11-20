function Animal (name, limbs) {
    this.name = name;
    this.limbs = limbs;
}

Animal.prototype.move = function() {
    //console.log("currently moving");
    console.log("Is alive and healthy")
};

function Dog(name) {
    Animal.call(this, name, 4);
}

Dog.prototype = Object.create(Animal.prototype);

function Bird (name) {
    Animal.call(this, name, 2);
}

//Bird.prototype = object.create(Animal.prototype);

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.move = function() {
    console.log("is currently flying" + "\nand him dey catch cruise forget.");
};

const puppy = new Dog("Puppy");
console.log("Puppy");
puppy.move();

const chick = new Bird("Falcon");
console.log("Falcon");
chick.move();