"use strict";

function main() {
  const amountOfFibonacciNumbers = 20;
  document.querySelector("p:first-of-type").textContent = fibonacci(
    amountOfFibonacciNumbers
  ).join(" 👉 ");
}

main();

function fibonacci(amount) {
  let fibonacciNumbers = [0, 1];
  for (let i = 2; i < amount; i++) {
    fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
  }
  return fibonacciNumbers;
}
