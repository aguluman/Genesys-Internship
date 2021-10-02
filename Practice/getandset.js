const driverBio ={
    firstName: "Lando",
    lastName: "Norris",
    dateOfBirth: "02|11|1999",

    get fullName() {
        return this.firstName + ' ' + this.lastName + ' ' + this.dateOfBirth;
    },
    set fullName(unique){
        this.firstName = "Chukwuma";
        this.lastName = "Akunyili";
        this.dateOfBirth = "24|12|1999";
    },
    set fullName(seperate){
        this.firstName = "Anders";
        this.lastName = "Hejlsberg";
        this.dateOfBirth = "12|1960";
    }
}

driverBio.fullName = "Anything" ;
console.log(driverBio.fullName);