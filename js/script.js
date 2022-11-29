//Variabili
const container = document.querySelector('.container');

// Ciclo FOR con numeri che partono dall'1 fino al 100
for(let i=1; i <= 100; i++){
    //variabile da utilizzare per creare la scacchiera
    let square;

    //numero diviso 3 da resto 0 e se lo stesso numero diviso 5 da resto 0
    if(i%3 == 0 && i%5 == 0){
        console.log('FizzBuzz');
        square = `<div class="square square-red">FizzBuzz</div>`;
    }
    // numero diviso 3 da resto 0
    else if(i%3 == 0){
        console.log('Fizz');
        square = `<div class="square square-green">Fizz</div>`;
    }
    // numero diviso 5 da resto 0
    else if(i%5 == 0){
        console.log('Buzz');
        square = `<div class="square square-yellow">Buzz</div>`;
    }
    else{
        console.log(i);
        square = `<div class="square">${i}</div>`;
    }
    // inserisco square con relative classi all'interno del container
    container.innerHTML += square;
}