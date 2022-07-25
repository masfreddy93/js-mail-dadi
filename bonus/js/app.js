// Creare un array con un numero a piacere di elementi.
// Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell’array.
// Attenzione #1: quanti elementi minimo dovrà contenere l’array?
// Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array, anche se non conosciamo a priori quanti elementi contiene.

console.log('La coda dell\'array');

//Creo il mio array
const ilMioArray = [5, 9, 23, 45, 87, 34, 63, 100];
console.log('Il mio array è composto da questo elenco di elementi: ' + ilMioArray);

console.log('Gli ultimi cinque elementi dell\'elenco sono questi: ');
for(let i=(ilMioArray.length - 1); i>=(ilMioArray.length - 5); i--) {
    console.log(ilMioArray[i]);
}
