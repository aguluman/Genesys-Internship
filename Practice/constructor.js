function Person (name, age){
    this.name = name;
    this.age = age;

    this.getYearOfBirth = function(myDOB){
        //return new Date().getFullYear() - this.age;
        return myDOB = new Date().getFullYear()- this.age;
        //the previous comment didnt have myDOB, i declared it here as a param for the function
    };
};

const firstPerson = new Person("Mbah Uche", 22);

console.log(firstPerson);
console.log(firstPerson.getYearOfBirth());