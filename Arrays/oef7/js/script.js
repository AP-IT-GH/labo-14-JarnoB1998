"use strict";

function main(){
    let spreadsheet = [
      [100, 104, 105],
      [144, 110, 109],
      [105, 107, 111],
    ];

    let spreadsheet2 = [[],[],[]];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const userInput = prompt(`Geef getal ${j+1} van rij ${i+1}:`);
            if (userInput === null) {
                j--;
                alert("We willen getallen geen NULL...");
            }else{
                const number = parseInt(userInput, 10);
                if (!isNaN(number)) {
                    spreadsheet2[i][j] = number;
                }else{
                    j--;
                    alert("Dit is geen getal...");
                }
            }
        }
        
    }

    const h1 = document.createElement("h1");
    h1.textContent = `Twee Dimensionale Sum`;
    document.body.appendChild(h1);

    for (let row = 0; row < spreadsheet2.length; row++) {
        let sum = 0;
        for (let column = 0; column < spreadsheet2[row].length; column++) {
            sum += spreadsheet2[row][column];
        }
        const paragraph = document.createElement("p");
        paragraph.textContent = `De som van de elementen in rij ${row+1}: ${sum}`;
        document.body.appendChild(paragraph);
    }
}
main();