/*
  WRITE YOUR SOLUTION HERE
*/

class Book {
  constructor(title, author, ISBN, numCopies){
    this.title = title,
    this.author = author,
    this.ISBN = ISBN,
    this.numCopies = numCopies
  }
  //by adding the keyword get, we are enabling ourselves to access this method as a property rather than a method.
  //That means that instead of accessing it as Book.availability(), it can simply be accessed as Book.availability as in the example on line 31

  get availability(){
    if(this.numCopies <= 10){
      return `There are not enough copies of ${this.title}`
    }else if(this.numCopies > 10){
      return `We will be happy to help you with ${this.title}`
    }
  }
}

const LordOfTheRings = new Book(
  'Lord of the Rings',
  'Arthur Knight',
  12,
  2
)

console.log(LordOfTheRings.availability)