"use strict";

function main() {
  printTextBox("HELLO WORLD");
  printTextBox("HALLO WERELD");
  printTextBox("HOLA MUNDO");
}
main();

function printTextBox(text) {
  console.log(`/${"*".repeat(text.length + 8)}\\`);
  console.log(
    `|${" ".repeat(4)}${text}${" ".repeat(4)}|`
  );
  console.log(`\\${"*".repeat(text.length + 8)}/`);
}
