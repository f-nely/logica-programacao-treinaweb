"use strict";
let idadeUsuario = 77;
if (idadeUsuario <= 15) {
    console.log("Você ainda não tem idade mínima para votar");
}
else if ((idadeUsuario > 15 && idadeUsuario <= 17) || idadeUsuario > 69) {
    console.log("Você pode votar se quiser, porém, seu voto é facultativo");
}
else {
    console.log("Voto obrigatório!");
}
