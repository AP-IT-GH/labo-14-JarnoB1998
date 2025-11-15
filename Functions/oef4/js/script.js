"use strict";

function main() {
  
  printMultiplications(1, 10, " | ");
  printMultiplications(2, 10, " | ");
  printMultiplications(3, 10, " | ");
  printMultiplications(4, 10, " | ");
  printMultiplications(5, 10, " | ");
  printMultiplications(6, 10, " | ");
  printMultiplications(7, 10, " | ");
  printMultiplications(8, 10, " | ");
  printMultiplications(9, 10, " | ");
  printMultiplications(10, 10, " | ");
}
main();

function printMultiplications(number, iterations, seperator = " , ") {
  const ul = document.body.querySelector("#multiplication-list");
  seperator = ` ${seperator.trim()} `;

  const li = document.createElement("li");
  for (let j = 1; j <= iterations; j++) {
    li.textContent += `${number * j}${seperator}`;
  }
  li.textContent = li.textContent.substring(0, li.textContent.length - 3);
  ul.appendChild(li);
}
