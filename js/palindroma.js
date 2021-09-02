let parolaDaVerificare = prompt("Inserisci una parola");

while (parolaDaVerificare.length == 0){
    parolaDaVerificare = prompt("Inserisci una parola");
}
console.log(isPalindrome(parolaDaVerificare))

function reverseWord(word){
    if (word.length == 0 || word.length == 1) {
        return word;
    } else {
        
        let reversedWord = word.split('').reverse().join('');
        return reversedWord;
    }
}

function isPalindrome(word){
    let trimmedWord = word.trim().toLowerCase();   
    if ( trimmedWord === reverseWord(trimmedWord)){ 
        return true;
    } 
    return false;   
}