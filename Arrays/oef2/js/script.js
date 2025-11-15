"use strict";

function main() {
  const FIRST_NAMES = ["Jarno", "Sofiya", "Joske", "Lea", "Inaya"];
  const LAST_NAMES = [
    "Beyers",
    "Kosimova",
    "Vermeulen",
    "Star Wars",
    "Van Den Broeck",
  ];

  if (FIRST_NAMES.length !== LAST_NAMES.length) {
    console.error("The length of your name lists is not equal to each other.");
  }

  const ul = document.createElement("ul");
  const h1 = document.createElement("h1");
  h1.textContent = "Volledige Namen:";
  document.body.appendChild(h1);

  const fullnames = [];
  for (let i = 0; i < FIRST_NAMES.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${FIRST_NAMES[i]} ${LAST_NAMES[i]}`;
    ul.insertBefore(li, ul.children[0]);

    fullnames.unshift(`${FIRST_NAMES[i]} ${LAST_NAMES[i]}`);
  }
  document.body.insertBefore(ul, h1);
  console.table(fullnames);
}
main();
