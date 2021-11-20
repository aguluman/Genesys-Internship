var mySingleton = (function () {
     
    //this instance stores a reference to the singleton
    var instance;

    function init() {
        //singleton
        //private method and variables are held here

        function privateMethod(){
            console.log("I am private meaning you can't see me.")
        }

        var privateVariable = "I'm am also private, you can't see this too."

        var privateRandomNumber = Math.random();

        return {
            //public methods and variables
            publicMethod: function () {
                console.log("The public and see me. (the light in the dark)")
            },

            publicProperty: "I am also public too.",

            getRandomNumber: function() {
                return privateRandomNumber;
            }
        };
    };

    return {
        //get the singleton instance if one exists
        // or create one if it doesn't

        getInstance: function () {

            if ( !instance) {
                instance = init();
            }
            return instance;
        }
    };
  })();

var myBadSingleton = (function () {
  //instance stores a reference to the singleton
  var instance;

  function init() {
    //singleton

    var privateRandomNumber = Math.random();

    return {
      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  };

  return {
    //Always create a singleton instance
    getInstance: function() {
      instance = init();
      return instance;
    }
  };
})();

//usage: (where i call them out)
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); //true

var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log (badSingleA.getRandomNumber() !== badSingleB.getRandomNumber() ); //true

//Note: as we are working with random numbers, there is a 
//mathematical possibility both numbers will be the same,
//however unlikely. the above example should otherwise still
//be valid.