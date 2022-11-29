// 1 - Ciclo FOR con numeri che partono dall'1 fino al 100
for(let i=1; i <= 100; i++){
    //numero diviso 3 da resto 0 e se lo stesso numero diviso 5 da resto 0
    if(i%3 == 0 && i%5 == 0){
        console.log('FizzBuzz');
    }
    // numero diviso 3 da resto 0
    else if(i%3 == 0){
        console.log('Fizz');
    }
    // numero diviso 5 da resto 0
    else if(i%5 == 0){
        console.log('Buzz');
    }
    else{
        console.log(i);
    }
}