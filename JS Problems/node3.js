/* PLUS MINUS*/
let arr = [-4, 3, -9, 0, 4, 1]

const plusMinus = ( arr )=>{

    let positiveIntegs = [];
    let negativeIntegs = [];
    let zeroIntegs = [];

    for( let i of arr){ 
        if( i > 0){
            positiveIntegs.push(i)
        }else if(i < 0){
            negativeIntegs.push(i)
        }else if(i === 0){
            zeroIntegs.push(i)
        };
    };
    
    let arrOfVals = [];
    arrOfVals.push((positiveIntegs.length / arr.length).toFixed(6));
    arrOfVals.push((negativeIntegs.length / arr.length).toFixed(6));
    arrOfVals.push((zeroIntegs.length / arr.length).toFixed(6));

   console.log( arrOfVals.join('\n'))
   return;

}

console.log(plusMinus(arr));