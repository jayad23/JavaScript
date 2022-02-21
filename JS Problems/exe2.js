/* PROBLEM: 
Some kids have made a letter for santa.
1. Some of them have included multiple spaces in the list,
2. Others, have scratched items off the list with a dash "_"
3. Other have repeated items on the list.

Write a code that eliminates all of those problems, and replace the list
with an object that includes the items and number of times they repeat.
*/

// Solution 1
const carta = 'bici coche balón _playstation bici coche peluche'
const listGifts = (letter)=>{
    const fistFiltered = letter.split(/\W+/).filter(item => !item.includes('_'))
    const secFiltered = fistFiltered.filter( item => !item.includes('n'))
    const arrList = []
    for (let i in secFiltered ){
        if (secFiltered[i].includes('bal')){
            let reptext = "balón"
            const segment = secFiltered[i].replace(secFiltered[i], reptext)
            arrList.push(segment)
            
        } else {
            arrList.push(secFiltered[i])
        }
    }
    
    let list = {}
    for (let item of arrList){
        if(!list[item]){
            list[item] = 1
        } else {
            list[item]++
        }
    }
    return list
}

console.log(listGifts(carta));

// Solution 2

const carta2 = 'bici coche balón _playstation bici coche peluche'

const listing = (letter2)=>{
    let newLetter = letter2.trim()
    const letterFiltered = newLetter.split(" ").filter( item => !item.includes('_'))
    let objListing = {}
    for (let i of letterFiltered){
        if(!objListing[i]){
            objListing[i] = 1
        }else{
            objListing[i]++
        }
    }
    return objListing
}

console.log(listing(carta2))