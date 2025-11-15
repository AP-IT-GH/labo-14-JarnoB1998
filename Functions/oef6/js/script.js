"use strict";

function main() {
  const paragraph = document.querySelector("p:first-of-type");
  paragraph.textContent = `De som van de array is: ${sum([2, 4, 6])}`;
  
}

main();

function sum(numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
