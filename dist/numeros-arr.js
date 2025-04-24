"use strict";
//let numerosArray: number[] = [5, 80, 4];
let numerosArray = [5, 80, -4];
let temNegativo = false;
function findNegativeNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            temNegativo = true;
            break;
        }
    }
    return temNegativo;
}
if (findNegativeNumbers(numerosArray)) {
    console.log("Esse array possui números negativos");
}
else {
    console.log(numerosArray);
}
