// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// C’è forse un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?



let numeroRandomGiocatore = Math.floor((Math.random() * 6)+1);
let numeroRandomComputer = Math.floor((Math.random() * 6)+1);
console.log(numeroRandomGiocatore, numeroRandomComputer);

let winnerWho = document.createElement("div");
let containerWinner = document.querySelector('.output');

if(numeroRandomGiocatore>numeroRandomComputer) {
    console.log('Ha vinto il giocatore');
    winnerWho.append('Ha vinto il giocatore');
    containerWinner.append(winnerWho);
} else if (numeroRandomGiocatore<numeroRandomComputer){
    console.log('Ha vinto il computer');
    winnerWho.append('Ha vinto il computer');
    containerWinner.append(winnerWho);
} else {
    console.log('Pareggio');
    winnerWho.append('Pareggio');
    containerWinner.append(winnerWho);
}


//rendere visibile nell'html il numero random del giocatore e del computer
let cellaGiocatore = document.createElement("div");
let cellaComputer = document.createElement("div");
cellaGiocatore.append(numeroRandomGiocatore);
cellaComputer.append(numeroRandomComputer);
// console.log(cellaGiocatore, cellaComputer);

let containerCellaGiocatore = document.querySelector('.numero-giocatore');
let containerCellaComputer = document.querySelector('.numero-computer');
containerCellaGiocatore.append(cellaGiocatore);
containerCellaComputer.append(cellaComputer);
// console.log(containerCellaGiocatore, containerCellaComputer);
