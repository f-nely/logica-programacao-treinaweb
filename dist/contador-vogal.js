"use strict";
let palavraMisteriosa = "treinaweb";
let qtdVogal = 0;
for (let i = 0; i < palavraMisteriosa.length; i++) {
    if (palavraMisteriosa[i] == "a" ||
        palavraMisteriosa[i] == "e" ||
        palavraMisteriosa[i] == "i" ||
        palavraMisteriosa[i] == "o" ||
        palavraMisteriosa[i] == "u") {
        qtdVogal++;
    }
}
console.log(qtdVogal);
