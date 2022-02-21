const numericValues = [13,1,3,12,5,18,9,19]
function codingNumbers ( vals ){
    const alphabet = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
    let alphabetSplit = alphabet.split(',');
    let deCriptedVal = [];
    vals.forEach((val, index)=>{
        if( index === 0){
            deCriptedVal.push(alphabetSplit[val-1].toUpperCase());
        }else{
            deCriptedVal.push(alphabetSplit[val-1]);
        }
    });
    return deCriptedVal.join('');
}

const result = codingNumbers(numericValues);
console.log( result )
/** Now, we will input a word, and the outcome must be its equivalent numeric value */

const userName = "andres gil";
function encriptingName(input){
    const alphabet = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
    const alphabetSplit = alphabet.split('');
    const inputSplit = input.split('');
    let letterNumbers = [];
    for( let i of inputSplit){
        let lowerCasedValue = i.toLowerCase();
        alphabetSplit.forEach( (letter, index)=>{
            if( lowerCasedValue === letter){
                letterNumbers.push((index / 2) + 1)
            }
        })
    };
    let outPut = `Your output is ${letterNumbers.join(',')}`;
    return outPut;
}
const resultCode = encriptingName( userName );
console.log( resultCode )