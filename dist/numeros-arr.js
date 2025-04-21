"use strict";
let numerosArray = [5, 80, 4];
//let numerosArray: number[] = [5, 80, -4];
let temNegativo = false;
for (let i = 0; i < numerosArray.length; i++) {
    if (numerosArray[i] < 0) {
        temNegativo = true;
    }
    else {
        temNegativo = false;
    }
}
if (temNegativo) {
    console.log("Esse array possui números negativos");
}
else {
    console.log(numerosArray);
}
