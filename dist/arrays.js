"use strict";
let notas;
notas = [10, 8, 7.5, 9.5, 7, 8.3];
// console.log(notas);
// console.log(notas[0]);
let total = 0;
let media;
for (let i = 0; i < notas.length; i++) {
    total += notas[i];
}
media = total / notas.length;
// console.log(`A média é ${media.toFixed(1)}`);
// Adicionando elementos ao array
let cars = [];
console.log(cars);
cars.push("Honda HR-V");
cars.push("Fiat Pulse");
cars.push("Hyundai Creta");
cars.push("Jeep Compass");
console.log(cars);
