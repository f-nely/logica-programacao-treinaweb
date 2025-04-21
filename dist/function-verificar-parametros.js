"use strict";
let numerosArray1 = [1, 2, 3, 4, 5];
let numero2 = 5;
let verifica = false;
function verificarParametros(numbers, n1) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == n1) {
            verifica = true;
        }
        else {
            verifica = false;
        }
    }
    if (verifica) {
        console.log("Número existe no array");
    }
    else {
        console.log("Número não existente no array");
    }
}
verificarParametros(numerosArray1, numero2);
