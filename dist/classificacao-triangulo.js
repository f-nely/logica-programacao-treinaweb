"use strict";
let ladoUm = 10;
let ladoDois = 10;
let ladoTres = 5;
if (ladoUm == ladoDois || ladoUm == ladoTres || ladoDois == ladoTres) {
    console.log("Esse triângulo tem dois os lados iguais, portanto é isósceles");
}
else if (ladoUm == ladoDois && ladoUm == ladoTres) {
    console.log("Esse triângulo tem todos os lados iguais, portanto é equilátero");
}
else {
    console.log("Esse triângulo não possui nenhum lado igual, portanto é escaleno");
}
