// var userOne = {
//     email: 'chukwumaakunyili@gmail.com',
//     name: 'kamsi',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// }

class Person {
    constructor(name, age, location, occupation) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.occupation = occupation;
    }
    printDescription() {
        console.log(`My name is ${this.name} and I'm ${this.age} years old. I live in ${this.location} and I work as a ${this.occupation}.`);
    }
}
// const firstUser = new Person('Tom', 30, 'Sydney', 'Teacher');
// firstUser.printDescription();
const secondUser = PersonMaker('Johnny', 25, 'London', 'Driver');
secondUser.printDetails();