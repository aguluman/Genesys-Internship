const Chitis = function (carbohydrate, beverage){
    let food = carbohydrate;
    let drinks = beverage;

        return {
            summary: function(){
                console.log(`The dominant option chitis offer are ${food} and ${drinks}`)
            }
        }
}
const restaurant = new Chitis("carbohydrate filled", "a variety of electrolyte rich liquids.");
restaurant.summary();