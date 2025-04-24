"use strict";
let numerosArray2 = [20, 10, 130, 50, 40];
function exibirMaior(arr) {
    let maior = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    return maior;
}
console.log(exibirMaior(numerosArray2));
