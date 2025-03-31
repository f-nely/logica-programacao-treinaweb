"use strict";
function somaAteN(num) {
    let acumulador = 0;
    for (let i = num; i > 0; i--) {
        acumulador = acumulador + i;
    }
    return acumulador;
}
console.log(somaAteN(5));
