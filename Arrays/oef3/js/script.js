"use strict";

function main() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.querySelector("#amount");
    const friendNames = [];

    const ul = document.createElement("ul");
    for (let i = 0; i < parseInt(input.value, 10); i++) {
      friendNames.push(prompt(`Geef de naam van vriend ${i + 1}:`)); // of aparte loop voor array te vullen en LI te vullen, en UNSHIFT gebruiken, dan moet je geen insertBefore doen 
      const li = document.createElement("li");
      li.textContent = friendNames[i];
      ul.insertBefore(li, ul.children[0]); 
    }

    document.body.appendChild(ul);
  });
}

main();
