/*
  WRITE YOUR SOLUTION HERE
*/

class Movie {
  constructor (movie, genre, director, releaseYear, rating){
      this.movie = movie,
      this.genre = genre,
      this.director = director,
      this.releaseYear = releaseYear,
      this.rating = rating
  }
  
  getOverview(){
   let print = `The movie ${this.movie} which is a ${this.genre} film, was directed by ${this.director}. It was released in ${this.releaseYear} and it was rated as ${this.rating}`
   return print
  }
}

const spiderMan = new Movie (
 'Spider man',
 'Fantasy',
 'Bobby Deals',
 2012,
 '5 stars'
)

console.log(spiderMan.getOverview())