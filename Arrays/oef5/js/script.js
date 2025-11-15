"use strict";

function main() {
  const grades = [];
  let userInput = "";
  do {
    userInput = prompt("Voer een punt in (type 'stop' om te eindigen):");

    if (userInput !== null && userInput.toLowerCase() !== "stop") {
      const grade = parseInt(userInput, 10);
      if (!isNaN(grade)) {
        grades.push(grade);
      } else {
        alert("Ongeldige invoer, probeer opnieuw...");
      }
    }
  } while (userInput !== null && userInput.toLowerCase() !== "stop");

  let average = grades.reduce((sum, number) => sum + number, 0) / grades.length;
  let percentage =
    (grades.reduce((sum, number) => sum + number, 0) / (grades.length * 20)) *
    100;
  let failedExams = grades.filter((number) => number < 10).length;

  const h1 = document.createElement("h1");
  h1.textContent = "Puntenverwerking met vragen";
  document.body.appendChild(h1);

  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.textContent = `Gemiddelde: ${average}`;
  const li2 = document.createElement("li");
  li2.textContent = `Percentage: ${percentage.toFixed(2)}%`;
  const li3 = document.createElement("li");
  li3.textContent = `Aantal gebuisde vakken: ${failedExams}`;

  ul.append(li, li2, li3);
  document.body.appendChild(ul);
}
main();
