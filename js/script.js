const showContainer = document.querySelector('#show-container')
const title = document.querySelector('#title')
const title2 = document.querySelector('#title2');
let userNumber = []; //array dei numeri inseriti dall'utente
let arrRandom = []; // array numeri random

title.innerHTML = 'Memorizza questi numeri'; //messaggio iniziale

// funzione genera numeri random da 1 a 10
let genNumber = ()=> Math.floor(Math.random() * 10) + 1;

//ciclo per pushare numeri nella array
for (let i = 0; i <5; i++) {
    console.log(genNumber());
    arrRandom.push(genNumber());
}
//stampare su console e dentro html
console.log(arrRandom);
showContainer.innerHTML = arrRandom;

//timer con counter che parte da 5 (per semplificare)
const idCounter = setInterval(count, 1000); 
let counter = 5;

function count(){
    if (counter == 0) {
        showContainer.classList.add('hidden');
        clearInterval (idCounter);
        userPush();
    } else {
        console.log(counter);
        title2.innerHTML = `Tempo rimanente: ${counter}s`; //messaggio tempo rimanente
        counter--;
    }
}

//Richiesta dei numeri all'utente
function userPush(){
for (let i = 0; i < 5; i++) {
    userNumber.push(parseInt(prompt('Inserisci i numeri')));
    console.log('numero dell\'utente:', + userNumber[i]);
}
console.log('Array dell\'utente: ' + userNumber);
}


//Confrontare le array
for (let i = 0; i < 5; i++) {
    if (arrRandom[i] === userNumber[i]) {
        console.log('Hai trovato il numero: '+ arrRandom[i]);

    } else {
        console.log('Numero non trovato!')
    }
}
