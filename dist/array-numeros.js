"use strict";
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];
let impares = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        pares.push(array[i]);
        continue;
    }
    impares.push(array[i]);
}
console.log(`Números pares: [ ${pares} ]`);
console.log(`Números ímpares: [ ${impares}]`);
