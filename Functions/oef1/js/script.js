"use strict";

function main(){
    let number = giveNumber();
    let text = giveString();
    let boolean = giveBoolean();
    printString();
    printNumbers(2, 2);
}
main();

function giveNumber(){
    return 2;
}

function giveString(){
    return "een zin";
}

function giveBoolean(){
    return true;
}

function printString(){
    console.log("print een zin");
}

function printNumbers(number1, number2){
    console.log(number1 * number2);
}