// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// C’è forse un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?

let numeroRandomGiocatore = Math.floor((Math.random() * 6)+1);
let numeroRandomComputer = Math.floor((Math.random() * 6)+1);
console.log(numeroRandomGiocatore, numeroRandomComputer);
if(numeroRandomGiocatore>numeroRandomComputer) {
    console.log('Ha vinto il giocatore');
} else if (numeroRandomGiocatore<numeroRandomComputer){
    console.log('Ha vinto il computer');
} else {
    console.log('Pareggio')
}