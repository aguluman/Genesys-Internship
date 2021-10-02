function Game(title, gameDirector, studio, yearsInProduction){
    this.title = title;
    this.gameDirector = gameDirector;
    this.studio = studio;
    this.yearsInProduction = yearsInProduction;
}
let game1 = new Game("Detroit: Becoming Human","David Cage","Quantic Dream", "2013 to 2018");
let game2 = new Game("Hellblade: Senua Sacrifice","Tameen","Ninja Theory", "2014 to 2017");

console.log(game1);
console.log(game2);