function Animal (name, limbs) {
    this.name = name;
    this.limbs = limbs;
}

Animal.prototype.move = function() {
    console.log("currently moving");
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
    console.log("currently flying");
};

const puppy = new Dog("Puppy");
console.log("puppy");
puppy.move();

const chick = new Bird("Falcon");
console.log("chick");
chick.move();