function FormulaOne(){}

FormulaOne.prototype.team = function() {
    return "Mclaren Racing";
}

function FormulaTwo(theBest) {
    this.theBest = theBest;
}
FormulaTwo.prototype = Object.create(FormulaOne.prototype);

FormulaTwo.prototype.summary = function() {
    console.log(`One must be the best in Formula 2 to enter Formula 1 ${this.team()}, and he might find himself with ${this.theBest}`);
}

let race = new FormulaTwo("Lando Norris");
race.summary();