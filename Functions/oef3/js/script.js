"use strict";

function main() {
  let userInput = "";
  do {
    userInput = prompt("Geef een email in:");

    if (userInput !== null && userInput.trim() !== "") {
        let email = userInput.trim();
        console.log(`De eigenaar van ${email} heet ${nameFromEmail(email)}`);
    }
  } while (userInput !== null && userInput.trim() !== "");
}

main();

function nameFromEmail(email = "") {
  return email.substring(0, email.indexOf("@")).replace(".", " ").toUpperCase();
}
