const squMtrx = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];

function matrix ( arr ){
    let arrLeft = []; 
    let arrRight = [];

    for(let i in arr){

        arrLeft.push(arr[i][i]);

        arrRight.push(arr[i][arr.length - (+i + 1)]);
       
    }

    let sumLeft = arrLeft.reduce((acc, val)=> acc + val);
    let sumRight = arrRight.reduce((acc, val)=> acc + val);

    let result = (sumLeft - sumRight)


    return Math.abs(result)
}

const sqMatrix = matrix( squMtrx )
console.log( sqMatrix )
