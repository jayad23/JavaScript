// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // || ❌

const textOne = "bici coche (balón) bici coche peluche";
const textTwo = "(muñeca) consola bici"
const textThree = "bici coche (balón bici coche"
const textFour = "peluche (bici [coche) bici coche balón"
const textFive = "(peluche {) bici"
const textSix = "() bici"
const textSev = "(a()) bici(a)"
const textEight = "(bici 'total'"
const textNin = "(()) bici" //)bici( muneco

const isValid = (letter) =>{
    const indexOp = letter.indexOf("(")
    const indexCl = letter.indexOf(")")
    if(indexOp !== -1 || indexCl !== -1 ){
        if (letter.includes(')') && indexCl !== (indexOp + 1) && indexOp < indexCl){
            
            const cut = letter.slice(indexOp, (indexCl + 1) )
            const arrOfCut = cut.split('')
            let arrLetter = []
            for (let i of arrOfCut){
                if(!arrLetter[i]){
                    arrLetter[i] = 1
                }else{
                    if(arrLetter[i]){
                        return false
                    }
                }
            }
            return true
        }else {
            return false
        }
    }
    
}


console.log(isValid(textOne)) //true
console.log(isValid(textTwo)) // true
console.log(isValid(textThree))
console.log(isValid(textFour))
console.log(isValid(textFive))
console.log(isValid(textSix))
console.log(isValid(textSev))
console.log(isValid(textEight))
console.log(isValid(textNin))
