/* PROBLEM: 
You are given a secret password. To find out its meaning,
you must reverse the original phrase and return it low cased. 
Write a code to solve this problem.
*/

// Solution 1
// Declaring variables
let password = 'ylimaF'

const reversing = (text)=>{
    const textCased = text.toLowerCase()
    const textArr = textCased.split('')
    const textRev = textArr.reverse()
    const passCode = textRev.join('')

    return passCode
}

console.log(reversing(password))

// Solution 2
// Chaining methods

let password2 = 'aLiMaC'
const gettingPassword = (text)=>{
    const passCode = text.toLowerCase().split('').reverse().join('')
    return passCode
}

console.log(gettingPassword(password2))

// Solution 3
// Creating your own solution

let password3 = 'noicanimreteD'
const getReverse = (text) =>{
    let lowCase = text.toLowerCase()
    let code = ''
    for (let i = lowCase.length - 1; i >= 0; i--){
        code += lowCase[i]
    }
    return code
}

console.log(getReverse(password3))