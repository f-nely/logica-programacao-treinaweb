"use strict";
let aluno = {
    id: 1,
    nome: "Maria",
    notas: [7, 8, 9, 6, 8.5],
};
function calcularMedia(student) {
    let soma1 = 0;
    let media1 = 0;
    for (let i = 0; i < student.notas.length; i++) {
        soma1 += student.notas[i];
    }
    media1 = soma1 / student.notas.length;
    console.log(`O(A) aluno(a) ${student.nome} de id: ${student.id} teve de média ${media1}`);
}
calcularMedia(aluno);
