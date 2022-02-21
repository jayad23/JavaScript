/*
  WRITE YOUR SOLUTION HERE
*/
const getBill = (bill)=>{
  let totalCoffee = bill.reduce(
    (coffees, coffee) => (coffees += coffee)
  );
  let total = totalCoffee * (1,25)
  return `Your total consumption was $${total}`
}

console.log(getBill([2, 4, 5, 6, 3]))