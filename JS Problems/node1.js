const arr = [ 12, 33, 12, 40 ];
const arr2 = [ 23, 11, 15, 40 ]
let countArr = 0;
let countArr2 = 0;

const comparing = ( a, b)=>{
  let countA = 1;
  let countB = 1;

  for (let i in a){
    if( a[i] === b[i]){
      let result = "it's a tie!";
      console.log(result, countA = 0, countB = 0);
    }else if( a[i] > b[i] ){
      let result = "Alice's point";
      console.log(result, countA++);
    }else if( a[i] < b[i] ){
      let result = "Bob's point";
      console.log(result, countB++);
    }
  }
}

function compareTriplets(a, b) {
  let countAlice = 0;
  let countBob = 0;
  for( let i in a){
      if(a[i] > b[i]){
          countAlice++;
      }else if(a[i] < b[i]){
          countBob++
      } else{
          countAlice;
          countBob;
      }
  }
  let result = [countAlice, countBob];
  return result;
}


comparing( arr, arr2)
const fromHR = compareTriplets(arr, arr2);
console.log( fromHR )