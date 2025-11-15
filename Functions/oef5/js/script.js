"use strict";

function main() {
  const ul = document.body.querySelector("ul");
  for (let i = 1950; i < new Date().getFullYear(); i++) {
    const li = document.createElement("li");
    if (isLeapYear(i)) {
      li.textContent = `Het jaartal ${i} is een schrikkeljaar.`;
    }
    ul.appendChild(li);
  }
}
main();

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
