"use strict";

function main(){
    const NUMBERS = [1, 2, 3, 4, 5, 6];
    let sum = 0;
    for (let i = 0; i < NUMBERS.length; i++) {
        sum += NUMBERS[i];
    }
    console.log(`De som van de getallen "${NUMBERS.join(" + ")}" = ${sum}`);
}
main();