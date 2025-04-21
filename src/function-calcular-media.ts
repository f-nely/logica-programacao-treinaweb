let aluno: { id: number; nome: string; notas: number[] } = {
  id: 1,
  nome: "Maria",
  notas: [7, 8, 9, 6, 8.5],
};

let soma1: number = 0;
let media1: number = 0;
function calcularMedia(student: { id: number; nome: string; notas: number[] }) {
  for (let i: number = 0; i < student.notas.length; i++) {
    soma1 += student.notas[i];
  }
  media1 = soma1 / student.notas.length;
  console.log(
    `O(A) aluno(a) ${student.nome} de id: ${student.id} teve de média ${media1}`
  );
}

calcularMedia(aluno);
