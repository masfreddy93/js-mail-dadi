// chiedere all'utente la mail

const mailUtente = prompt('Digitare email per favore');
// console.log(mailUtente);

// creare un array contenente una serie di mail
const listaMail = ['mariorossi@yahoo.com', 'giovannimuciacia@gmail.com', 'ginorosario@blu.it', 'erbellino@bella.com', 'fedelarue@gmail.com'];
// console.log(listaMail)
let ePresente = false;

// verificare se la mail digitata è contenuta nell'array
for(let i=0; i < listaMail.length; i++){
    let seNellaLista = listaMail[i];
    // console.log(seNellaLista); 

    if(mailUtente === seNellaLista){
        ePresente = true;
    }
}

if(ePresente === true){
    console.log('La mail ' + mailUtente + ' è presente nell\'elenco');
} else {
    console.log('La mail ' +mailUtente + ' non è presente nell\'elenco');
}