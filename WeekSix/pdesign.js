function Formula1(teams) {
    this.of20teams = teams;
}

Formula1.prototype ={ 
    getModel: function() {
        console.log("The recent member of Formula1 team is..." + this.of20teams);
    }
};

const teams = new Formula1("Eande Racing");
teams.getModel();