var mySingleton = (function(){
    var instance;

    function init () {
        var privateVar ="Iam private variable";
        var randomNumber = Math.random();

        return{
            publicMethod: function (){
                console.log("The public can see me");
            },
            publicProperty: " I am a public property",
            getRandomNumber: function () {
                return randomNumber;
            }
        }
    }

    return {
        getInstance: function (){
            if (!instance) {
                instance = init();
            }

            return instance;
        }
    }
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();

console.log(singleA.getRandomNumber());
console.log(singleB.getRandomNumber());