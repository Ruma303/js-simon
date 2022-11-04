const contShow = document.querySelector('.container-show');
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
contShow.innerHTML = arrRandom;

//timer. il tempo PARTE da 0, quindi la pausa è 0
const idCounter = setTimeout(count, 2000); 
let counter = 30;

function count(){
    if (counter == 0) {
        contShow.classList.add('hidden');
        clearTimeout(idCounter);
        //qui da inserire il prompt per chiedere i numeri. puoi usare una funzione.
    } else {
        console.log(counter);
        title2.innerHTML = `Tempo rimanente: ${counter}s`; //messaggio tempo rimanente
        counter--;
    }
}




// userNumber = parseInt(prompt('Inserisci i numeri'))