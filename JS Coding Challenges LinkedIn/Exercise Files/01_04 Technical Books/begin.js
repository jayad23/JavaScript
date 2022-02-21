/*
  WRITE YOUR SOLUTION HERE
*/

class Book {
  constructor (title, author, ISBN, numCopies){
    this.title= title,
      this.author = author,
        this.ISBN = ISBN,
          this.numCopies = numCopies
  }
  
  get availability (){
    if (this.ISBN === 1){
      let print = `The book ${this.title} is not available at the moment`
      return print
    } else if (this.ISBN === 2){
      let print = `Please, go to section B for the title ${this.title}`
      return print
    }
  }
  
  get info(){
    let print = `The book ${this.title} was written by ${this.author}. Eversince, it has sold ${this.numCopies} copies`
    return print
  }
}

const copy = new Book(
  'The lord of the rings',
  'Arthor Knight',
  2,
  `534 million`
)

class Technical extends Book{
  constructor (title, author, ISBN, numCopies, editionYear){
    super(title, author, ISBN, numCopies);
    this.editionYear = editionYear
  }
  
  get edition(){
    if(this.editionYear <= 1976){
      let print = `This book from ${this.editionYear} is limited edition`
      return print
    } else if (this.editionYear === undefined){
      return 'This is not a valid text'
    }  else {
      let print = `This book from ${this.editionYear} is one of our recent editions`
      return print
    }
  }
}

const library = [
  {
    title: 'Lord of the rings',
    author: 'Arthurd Knight',
    ISBN: 2,
    copiesSold: `523 million`,
    earliestEdition: 1971
  },
  {
    title: 'Harry Potter',
    author: 'J. K. Rowlling',
    ISBN: 1,
    copiesSold: `143 million`,
    earliestEdition: 2001
  }
]

const library2 = 
  {
    title: 'Lord of the rings',
    author: 'Arthur Knight',
    ISBN: 2,
    copiesSold: `523 million`,
    earliestEdition: 1971
  }
const copy2 = new Technical (
  title = library2.title,
  author = library2.author,
  ISBN = library2.ISBN,
  numCopies = library2.copiesSold,
  editionYear = library2.earliestEdition
)
console.log(copy2.edition)
console.log(copy2.info)
console.log(copy2.availability)