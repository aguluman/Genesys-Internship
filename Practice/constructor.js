function Person (name, age){
    this.name = name;
    this.age = age;

    this.getYearOfBirth = function(){
        return new Date().getFullYear() - this.age;
    };
};

const firstPerson = new Person("Mbah Uche", 22);

console.log(firstPerson);
console.log(firstPerson.getYearOfBirth());