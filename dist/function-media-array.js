"use strict";
let array1 = [5, 6, 8, 10, 1];
let somatorio = 0;
function mediaArray(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        somatorio += numeros[i];
    }
    console.log(somatorio / numeros.length);
}
mediaArray(array1);
