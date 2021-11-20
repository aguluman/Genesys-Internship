// Singleton pattern
let learnableDatabase = (function () {
    let mainDataBase
  
    function initializeDatabase(coordinatorName) {
      let coordinator = coordinatorName
      let interns = []
  
      function addIntern(nameOfIntern) {
        interns.push(nameOfIntern)
      }
  
      function viewInterns() {
        return interns
      }
  
      function updateCoordintor(newCoordinatorName) {
        coordinator = newCoordinatorName
      }
      function getCoordinator() {
        return coordinator
      }
  
      return {
        updateCoordintor: updateCoordintor,
        getCoordinator,
        viewCurrentInterns: viewInterns,
        addIntern: addIntern,
      }
    }
  
    return {
      getDatabaseInstance: function (coordinatorName) {
        if (!mainDataBase) {
          mainDataBase = initializeDatabase(coordinatorName)
        }
  
        return mainDataBase
      },
    }
  })()
  
  let learnableDatabaseInstance1 = learnableDatabase.getDatabaseInstance('Jerry Rukewve')
  console.log(learnableDatabaseInstance1.getCoordinator())
  learnableDatabaseInstance1.updateCoordintor('manLikeCliff')
  console.log(learnableDatabaseInstance1.getCoordinator())
  
  let learnableDatabaseInstance2 = learnableDatabase.getDatabaseInstance()
  console.log(learnableDatabaseInstance2.getCoordinator())
  learnableDatabaseInstance2.addIntern('Aruogu')
  
  console.log(learnableDatabaseInstance1.viewCurrentInterns())
  
  // Example 2
  const mySingleton = (function () {
    let instance
  
    function init() {
      let _privateVariable = 'I am a private variable'
      let _privateMethod = () => {
        console.log(_privateVariable, ' in a private method.')
      }
  
      return {
        publicMethod: function () {
          console.log('I am just a public function')
          console.log('I have access to the private methods in this function', _privateMethod)
        },
        publicVariable: _privateVariable,
      }
    }
  
    return {
      getSingletonInstance: () => {
        if (!instance) {
          instance = init()
        }
  
        return instance
      },
    }
  })()
  
  let singletonA = mySingleton.getSingletonInstance()
  let singletonB = mySingleton.getSingletonInstance()
  
  singletonA
  