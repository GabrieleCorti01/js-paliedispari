// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parolaUtente = prompt("inserisci una parola");
let isPalindromo = verificaPalindromo(parolaUtente)
console.log(isPalindromo)

if (isPalindromo == true){
    console.log("è palindromo")
} else {
    console.log("non è palindromo!")
}

// Inizio funzione
function verificaPalindromo (parola){
    console.log(parola.length)
    // girare la parola al contrario
    let parolaAlContrario = "";
    for ( let i = parola.length - 1; i >= 0 ;i--){
        parolaAlContrario = parolaAlContrario + parola[i];
        // verificare che la parola al contrario sia uguale alla parola normale
    } 
    console.log(parolaAlContrario)
    if (parolaAlContrario.toUpperCase() == parola.toUpperCase()){
        return true;

    } else {
        return false;
    }
    
}
