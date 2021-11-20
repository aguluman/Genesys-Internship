//What i've decided to use is singleton pattern.

let myLibrary = (function() {
    let receptionist
  
    function walkIntoLibrary(civilian) {
      let person = civilian
      let book = []
  
      function createBook(nameOfBook) {
        book.push(nameOfBook)
      }
  
      function listBooks() {
        return book
      }
  
      function updateVisitor(newVisitor) {
        person = newVisitor;
      }
  
      function getVisitor() {
          return person
      }
      
  
       return {
        updateVisitor : updateVisitor,
        getVisitor,
        listCurrentBooks: listBooks,
        createBook : createBook,
      }
    }
    return {
      getCatalog: function (civilian) {
        if (!receptionist) {
          receptionist = walkIntoLibrary(civilian)
        }
  
        return receptionist
      },
    }
  })()
  
  let firstAction = myLibrary.getCatalog('Someone entered')
  console.log(firstAction.getVisitor())
  firstAction.updateVisitor('James Bond')
  console.log(firstAction.getVisitor())
  
  let secondAction = myLibrary.getCatalog()
  //console.log(secondAction.getVisitor())
  secondAction.createBook('JB collected Dante Inferno. ')
  console.log(firstAction.listCurrentBooks())
  
    
    
    