"use strict";
function encontrePrimo(num) {
    let qtdMultiplos = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            if (i !== 1) {
                qtdMultiplos++;
            }
        }
    }
    if (qtdMultiplos == 1) {
        return true;
    }
    else if (qtdMultiplos > 1) {
        return false;
    }
    else {
        return false;
    }
}
let numero = 12;
console.log(encontrePrimo(numero));
