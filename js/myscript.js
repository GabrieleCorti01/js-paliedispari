
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// far scegliere all'utente se pari o dispari
let sceltaUtente = prompt("Scegli se pari o dispari!");
console.log(sceltaUtente)
sceltaUtente = sceltaUtente.toUpperCase()

// far scegliere all'utente un numero da 1 a 5
let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5!"));
console.log("Il tuo numero: " + numeroUtente)

let numeroGenerato = numberGenerator(1, 5);
console.log("Numero CPU: " + numeroGenerato)

// faccio la somma dei 2 numeri
let somma = (numeroUtente + numeroGenerato)
console.log("Numero FINALE!: " + somma)

// verificare se il numero è pari odispari
if (pariODispari(somma) == true){
    console.log("è pari")
} else{
    console.log("è dispari")
}

// Dichiaro chi è il vincitore tra i 2 se è l'utente ha scelto pari e la somma è pari ha vinto l'utente
if (sceltaUtente == "PARI" && pariODispari(somma) == true){
       console.log("Hai vinto!")
} else if (sceltaUtente == "DISPARI" && pariODispari(somma) == false){
    console.log("Hai vinto!")
} else {
    console.log("Hai perso!")
}

// Devo stabilire se la somma dei due numeri è pari o dispari
function pariODispari(numero){
    if (numero % 2 == 0){
        return true;
    }else false;      
}

// generare un numero random da 1 a 5 con ua funzione
function numberGenerator(min, max) {

    numero = Math.floor(Math.random() * (max - min + 1)) + min;
    return numero;
    
}


