"use strict";
/* let primeiroArray: number[] = [2, 10, 8];
let segundoArray: number[] = [3, 15, 5]; */
let primeiroArray = [2, 10, 5];
let segundoArray = [3, 15, 5];
let temNumerosRepetidos = false;
for (let i = 0; i < primeiroArray.length; i++) {
    for (let j = 0; j < segundoArray.length; j++) {
        if (primeiroArray[i] == segundoArray[j]) {
            temNumerosRepetidos = true;
        }
        else {
            temNumerosRepetidos = false;
        }
    }
}
if (temNumerosRepetidos) {
    console.log("Existem números repetidos.");
}
else {
    console.log(primeiroArray);
    console.log(segundoArray);
}
