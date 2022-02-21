/*
Caesar Cipher 
This is a trick in javascript which takes an input given in a secret code,
and return it a plain readable text
*/

const caesarCipher = (input, key) =>{
    key = key % 26; //variable re-written to control argument 'key' value in case is negative, or larger than 26 which is the number of characters in the alphabet
    let lowerCaseInput = input.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var ciphered = '';
    // 'ijklmnopqr'
    for(let i = 0; i < lowerCaseInput.length; i++){
        //this variable gives us access to the the index of every value in the string input
        let currentLetter = lowerCaseInput[i];
        //this condition will find spaces and exclamation marks. Ideally, it should be a regex
        if(currentLetter === ' ' || currentLetter === '!'){
            ciphered += currentLetter;
            continue; //this is a key word that would prevent the loop from an infinite run.
        }
        
        //this variable transforms the letter characters into numbers according to index
        let currentIndex = alphabet.indexOf(currentLetter);
        //This variable adds the number of the character, with the argument key value.
        //E.g. Z = 25 + key = 8 => 25 + 8 = 33
        let newIndex = currentIndex + key;
        //This first condition, substracts the number of characters in the alphabet from value of newindex, which will render in the index of the letter character that we need.
        // these two conditions will evaluate newIndex value to understand how to process the information.
        /**
         * E.g. newIndex will always be substracted against 26. 
         * the result might end up greater than 25, or in a negative value.
         * The last value was 33 (on line 25) Given it is greater than 25, You substract - 26, and it gives you 7.
         */
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = newIndex + 26;
        if(input[i] === input[i].toUpperCase()){
            ciphered += alphabet[newIndex].toUpperCase()
        }else{
            ciphered += alphabet[newIndex]
        }
    }
    
    return ciphered;
    
};
console.log(caesarCipher("!Zwddg ogjdv!", 8))
console.log(caesarCipher('abcdefghijklmnopqrstuvwxyz', 8))