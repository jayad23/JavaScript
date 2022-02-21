//In this problem, we take a value and must come up with the result
//of the value multiplied for the numbers from 1 up to its self.
// E.g. let value = 4 
//Factorialize = 4 * 3 * 2 * 1

const value = 5
function factorialize(num){
  let bucket = 1;
  for (let i = 1; i <= num; i++){
    bucket = bucket * i
  }
  return bucket
}
console.log(factorialize(value))