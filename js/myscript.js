let pariODispari = prompt("Inserisci -pari- o -dispari-");

while ( pariODispari.length === 0 || 
    ( pariODispari.trim().toLowerCase() != 'pari' && pariODispari.trim().toLowerCase() != 'dispari')){
    pariODispari = prompt("Inserisci -pari- o -dispari-");
}

var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

while (numeroUtente < 1 || numeroUtente >= 6)  {
    numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
}
console.log(pariODispari);
console.log(numeroUtente);

let numeroRandom =  getRandomNumber(1,5);
let somma = numeroUtente + numeroRandom ;
console.log(" Numero computer: " + numeroRandom);

let risultatoPariODispari = checkPariODispari(somma);

if (risultatoPariODispari == pariODispari){
    console.log('COMPLIMENTI HAI VINTO!');
} else {
    console.log('PUTROPPO HA VINTO IL PC');
}

function getRandomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkPariODispari(numero){
    if (numero % 2 == 0){
        return 'pari';
    }
    return 'dispari';
}