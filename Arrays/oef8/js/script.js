"use strict";

function main(){
    const amountOfNumbers =10;

    let fibonacci = [];

    fibonacci[0] = 0;
    fibonacci[1] = 1;

    for (let i = 2; i <= amountOfNumbers; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]; 
    }

    console.log(`De eerste ${amountOfNumbers} Fibonacci getallen zijn:`);
    console.table(fibonacci);
}
main();