"use strict";

function main() {
  let pokemon = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
  ];
  const h1 = document.createElement("h1");
  h1.textContent = "Pokémon Team";
  document.body.appendChild(h1);
  const pokemonUl = document.createElement("ul");
  pokemon.forEach((value, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${value}`;
    pokemonUl.appendChild(li);
  });
  document.body.appendChild(pokemonUl);
  const h2 = document.createElement("h2");
  h2.textContent = "Jouw team van pokémon is:";
  document.body.appendChild(h2);

  let team = [];

  let userInput = "";
  let pokemonChoice = 0;
  do {
    userInput = prompt("Welke pokemon wil je in je team? [1-21]: ");

    if (userInput === null) {
      userInput = "STOP";
    }

    pokemonChoice = parseInt(userInput, 10) - 1;

    if (!isNaN(pokemonChoice)) {
      if (pokemonChoice >= 0 && pokemonChoice < pokemon.length) {
        if (team.includes(pokemon[pokemonChoice])) {
          alert("Deze pokemon zit al in je team");
        } else {
          team.push(pokemon[pokemonChoice]);
        }
      } else {
        alert("Deze pokemon ken ik niet");
      }
    } else if (userInput.toUpperCase() !== "STOP") {
      alert("Ongeldige keuze probeer nog eens...");
    }
  } while (userInput.toUpperCase() !== "STOP");

  const teamUl = document.createElement("ul");
  team.forEach((member, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${member}`;
    teamUl.appendChild(li);
  });
  document.body.appendChild(teamUl);
}
main();
